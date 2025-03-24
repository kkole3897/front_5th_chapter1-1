const dataLink = "router-link";

let globalRoutes = [];
let routerMode = "history";

/**
 * @param {Array<{ path: string, component: () => string }>} routes
 * @returns {() => string}
 */
export const createHistoryRouter = (routes) => {
  globalRoutes = routes;
  routerMode = "history";
  /**
   * @param {HTMLElement | null} root
   */

  const router = (root) => {
    const handleRoute = (currentPathname) => {
      if (!root) {
        return;
      }

      const matchedRoute = routes.find(
        (route) => route.path === currentPathname,
      );
      const fallbackRoute = routes.find((route) => route.path === "*");

      root.innerHTML = "";
      if (matchedRoute) {
        root.appendChild(matchedRoute.component());
        return;
      } else if (fallbackRoute) {
        root.appendChild(fallbackRoute.component());
        return;
      }
    };

    document.addEventListener("click", (event) => {
      if (event.target.dataset.link === dataLink) {
        event.preventDefault();
        const to = event.target.href;
        window.history.pushState(null, "", to);
        const newPathname = to.replace(window.location.origin, "");
        handleRoute(newPathname);
      }
    });

    window.addEventListener("popstate", () => {
      const currentPathname = window.location.pathname;
      handleRoute(currentPathname);
    });

    const initialPathname = window.location.pathname;
    handleRoute(initialPathname);
  };

  return router;
};

export const createHashRouter = (routes) => {
  globalRoutes = routes;
  routerMode = "hash";

  const router = (root) => {
    const handleRoute = (currentHash) => {
      if (!root) {
        return;
      }

      const currentPath = (currentHash || "/").replace("#", "");

      const matchedRoute = routes.find((route) => route.path === currentPath);
      const fallbackRoute = routes.find((route) => route.path === "*");

      root.innerHTML = "";
      if (matchedRoute) {
        root.appendChild(matchedRoute.component());
        return;
      } else if (fallbackRoute) {
        root.appendChild(fallbackRoute.component());
        return;
      }
    };

    window.addEventListener("hashchange", () => {
      const currentHash = window.location.hash;
      handleRoute(currentHash);
    });

    const initialHash = window.location.hash;
    handleRoute(initialHash);
  };

  return router;
};

export const useRouter = () => {
  const router = {
    push: (path) => {
      if (routerMode === "history") {
        window.history.pushState(null, "", path);
        window.dispatchEvent(new Event("popstate"));
      } else {
        window.location.hash = path;
      }
    },
    replace: (path) => {
      if (routerMode === "history") {
        window.history.replaceState(null, "", path);
        window.dispatchEvent(new Event("popstate"));
      } else {
        window.location.hash = path;
      }
    },
  };

  return router;
};

/**
 * @param {object} props
 * @param {string} props.to
 * @param {string} [props.className]
 * @param {string} [props.children]
 * @returns {string}
 */
export const Link = (props) => {
  const href = routerMode === "history" ? props.to : `#${props.to}`;

  return `<a href="${href}" data-link="${dataLink}" ${props.className ? `class="${props.className}"` : ""}>${props.children ?? ""}</a>`;
};

/**
 *
 * @param {object} props
 * @param {string} props.to
 * @param {boolean} [props.replace]
 * @returns {string}
 */
export const Navigate = (props) => {
  if (routerMode === "history") {
    if (props.replace) {
      window.history.replaceState(null, "", props.to);
    } else {
      window.history.pushState(null, "", props.to);
    }
  } else {
    if (props.replace) {
      window.location.hash = props.to;
    } else {
      window.location.hash = props.to;
    }
  }

  return globalRoutes.find((route) => route.path === props.to)?.component();
};
