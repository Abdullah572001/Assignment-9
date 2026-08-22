import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";

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
    path: "/auth/login",
    element: <Login></Login>
  },
  {
    path: "/auth/register",
    element: <Register></Register>
  },
  {
    path: "*",
    element: <Error></Error>
  },
]);
