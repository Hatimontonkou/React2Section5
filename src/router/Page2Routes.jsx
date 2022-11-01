import { Page2 } from "../Page2";
import { UrIParameter } from "../UrIParameter";

export const Page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: true,
    children: <UrIParameter />
  }
];
