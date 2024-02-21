import { NavLink, useLocation } from "react-router-dom";
import { menuItems } from "../../constants";
import { formatToUrl } from "../../tools";

export function NavBar() {
  const location = useLocation();
  return (
    <div
      className={
        "flex-row items-center content-between gap-x-4 lg:gap-x-8 hidden md:flex"
      }
    >
      {menuItems.map((name, i) => (
        <NavLink
          key={i}
          to={name === "Home" ? "/" : formatToUrl(name)}
          className={({ isActive }) =>
            `transition-all ${isActive && "border-b-2  font-semibold"} select-none cursor-pointer inline-block border-primary font-rubik ${location.pathname === "/" ? "text-white" : "text-black"} text-lg`
          }
        >
          {name}
        </NavLink>
      ))}
    </div>
  );
}
