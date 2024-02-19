import { Outlet } from "react-router-dom";
import { Header } from "./ui-components";

export function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
