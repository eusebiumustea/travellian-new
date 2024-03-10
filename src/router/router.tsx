import { NavLink, Navigate, createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Blog, Explore, Home, Pricing, SignUp } from "../screens";
import { LogIn } from "../screens/log-in";

const NotFoundPage = () => {
  return (
    <div className=" grid place-items-center">
      <h1 className="m-4 text-center font-rubik text-3xl">404 not found</h1>
      <NavLink
        to={"/"}
        className={"m-4 text-center font-rubik text-2xl text-lime-800"}
      >
        Reload
      </NavLink>
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/authentification",
    children: [
      {
        path: "/authentification",
        element: <Navigate to={"/authentification/log-in"} />,
      },
      { path: "sign-up", element: <SignUp />, errorElement: <NotFoundPage /> },
      { path: "log-in", element: <LogIn />, errorElement: <NotFoundPage /> },
    ],
  },

  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      { path: "/travel", Component: () => <div>travel</div> },
      { path: "/blog", element: <Blog /> },
      { path: "/pricing", element: <Pricing /> },
    ],
  },
]);
