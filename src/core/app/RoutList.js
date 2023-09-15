import { HomePage, NotFoundPage } from "pages";
import D8121HomePage from "pages/D8121HomePage";
import { mainRoutes as d8121Menus } from "devs/d8121";

const routList = [
  { path: "*", component: NotFoundPage, key: "notFound" },
  { path: "/", component: HomePage, key: "home" },
  { path: "/d8121", component: D8121HomePage, key: "d8121HomePage" },
];

export const RoutList = [...routList, ...d8121Menus];
