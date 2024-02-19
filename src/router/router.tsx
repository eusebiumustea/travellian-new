import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Home } from "../screens";
const NotFoundPage = () => {
  return (
    <div>
      <App />
      <h1 className="m-4 text-center font-rubik text-3xl">404 not found</h1>
    </div>
  );
};
export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    ErrorBoundary: NotFoundPage,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/explore",
        Component: () => <div>explore</div>,
      },
      { path: "/travel", Component: () => <div>travel</div> },
      { path: "/blog", Component: () => <div>blog</div> },
      { path: "/pricing", Component: () => <div>pricing</div> },
    ],
  },
]);
