import { Outlet } from "react-router-dom";
import { Header } from "./ui-components";
import { useAuthListener } from "./hooks";

export function App() {
  useAuthListener();
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
