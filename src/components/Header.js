import { Link, useRouter } from "../libs/router";

import store from "../store";

const Header = () => {
  const router = useRouter();

  const isLoggedIn = store.isLoggedIn();
  const currentPathname = window.location.pathname;

  const handleClickLogout = (event) => {
    if (event.target.id !== "logout") {
      return;
    }

    event.preventDefault();
    store.setUser(null);
    alert("로그아웃 되었습니다.");
    router.push("/");
  };

  document.addEventListener("click", handleClickLogout);

  const navItems = isLoggedIn
    ? `
      <li>${Link({ to: "/", className: currentPathname === "/" ? "text-blue-600" : "text-gray-600", children: "홈" })}</li>
      <li>${Link({ to: "/profile", className: currentPathname === "/profile" ? "text-blue-600" : "text-gray-600", children: "프로필" })}</li>
      <li><button id="logout" type="button" class="text-gray-600">로그아웃</button></li>
    `
    : `
      <li>${Link({ to: "/", className: currentPathname === "/" ? "text-blue-600" : "text-gray-600", children: "홈" })}</li>
      <li>${Link({ to: "/login", className: "text-gray-600", children: "로그인" })}</li>
    `;

  return `
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        ${navItems}
      </ul>
    </nav>
  `;
};

export default Header;
