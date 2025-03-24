import MainPage from "./views/MainPage";
import ProfilePage from "./views/ProfilePage";
import LoginPage from "./views/LoginPage";
import NotFoundPage from "./views/NotFoundPage";

import { createHashRouter } from "./libs/router";

const createRoot = (root) => {
  const render = (callback) => {
    callback(root);
  };

  return { render };
};

const root = document.getElementById("root");
const router = createHashRouter([
  { path: "/", component: MainPage },
  { path: "/profile", component: ProfilePage },
  { path: "/login", component: LoginPage },
  { path: "*", component: NotFoundPage },
]);

createRoot(root).render(router);
