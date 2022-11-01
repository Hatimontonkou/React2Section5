import { Page1 } from "../Page1";
import { Page1DetaileA } from "../Page1DetaileA";
import { Page1DetaileB } from "../Page1DetaileB";

export const Page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/detaileA",
    exact: false,
    children: <Page1DetaileA />
  },
  {
    path: "/detaileB",
    exact: false,
    children: <Page1DetaileB />
  }
];
