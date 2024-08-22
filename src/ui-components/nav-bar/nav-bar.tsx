import { menuItems } from "../../constants";

export function NavBar() {
  return (
    <div
      className={
        "flex-row items-center content-between gap-x-4 lg:gap-x-8 hidden md:flex"
      }
    >
      {menuItems.map((name, i) => (
        <a
          href={`#${name}`}
          key={i}
          className={`select-none cursor-pointer inline-block border-primary font-rubik text-white text-lg`}
        >
          {name}
        </a>
      ))}
    </div>
  );
}
