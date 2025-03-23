const dataLink = "router-link";

let globalRoutes = [];

/**
 * @param {Array<{ path: string, component: () => string }>} routes
 * @returns {() => string}
 */
export const createHistoryRouter = (routes) => {
  globalRoutes = routes;

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

      if (matchedRoute) {
        root.innerHTML = matchedRoute.component();
        return;
      } else if (fallbackRoute) {
        root.innerHTML = fallbackRoute.component();
        return;
      }

      root.innerHTML = "";
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

export const useRouter = () => {
  const router = {
    push: (path) => {
      window.history.pushState(null, "", path);
      window.dispatchEvent(new Event("popstate"));
    },
    replace: (path) => {
      window.history.replaceState(null, "", path);
      window.dispatchEvent(new Event("popstate"));
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
  return `<a href="${props.to}" data-link="${dataLink}" ${props.className ? `class="${props.className}"` : ""}>${props.children ?? ""}</a>`;
};

/**
 *
 * @param {object} props
 * @param {string} props.to
 * @param {boolean} [props.replace]
 * @returns {string}
 */
export const Navigate = (props) => {
  if (props.replace) {
    window.history.replaceState(null, "", props.to);
  } else {
    window.history.pushState(null, "", props.to);
  }

  return globalRoutes.find((route) => route.path === props.to)?.component();
};
