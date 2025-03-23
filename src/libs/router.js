export const createHistoryRouter = (routes) => {
  const router = () => {
    const currentPathname = window.location.pathname;
    const matchedRouted = routes.find(
      (route) => route.path === currentPathname,
    );
    const fallbackRoute = routes.find((route) => route.path === "*");

    if (matchedRouted) {
      return matchedRouted.component();
    } else if (fallbackRoute) {
      return fallbackRoute.component();
    }

    return "";
  };

  return router;
};
