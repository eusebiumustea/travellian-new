import { menuItems } from "../../constants";
import { scrollToIndex } from "../../tools";

export function NavBar() {
  return (
    <div
      className={
        "flex-row items-center content-between gap-x-4 lg:gap-x-8 hidden md:flex"
      }
    >
      {/* {menuItems.map((name, i) => (
        <NavLink
          key={i}
          to={name === "Home" ? "/" : formatToUrl(name)}
          className={({ isActive }) =>
            `transition-all ${isActive && "border-b-2  font-semibold"} select-none cursor-pointer inline-block border-primary font-rubik ${location.pathname === "/" ? "text-white" : "text-black"} text-lg`
          }
        >
          {name}
        </NavLink>
      ))} */}
      {menuItems.map((name, i) => (
        <div
          onClick={() => scrollToIndex(i)}
          key={i}
          className={`select-none cursor-pointer inline-block border-primary font-rubik text-white text-lg`}
        >
          {name}
        </div>
      ))}
    </div>
  );
}
