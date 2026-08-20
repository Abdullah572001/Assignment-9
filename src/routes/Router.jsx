import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Error from "../page/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/about",
    element: <h2>This is an about page</h2>
  },
  {
    path: "/blog",
    element: <h2>This is an blog page</h2>
  },
  {
    path: "/login",
    element: <h2>This is an login page</h2>
  },
  {
    path: "*",
    element: <Error></Error>
  },
]);
