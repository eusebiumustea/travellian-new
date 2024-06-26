import { Newsletter } from "..";
import { Logo } from "../../assets";

export function BottomSection() {
  return (
    <div className="w-full bg-bottomSurface py-20 flex flex-col gap-20">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-20">
        <div className="flex flex-col gap-4">
          <Logo />
          <h1 className="font-rubik text-sm text-white">
            Copyright © Travellian 2020 All rights reserved
          </h1>
        </div>
        {/* <div className="flex flex-col gap-4">
          <h1 className="font-rubik font-medium text-white text-2xl pb-2">
            Menu
          </h1>
          {menuItems.map((name, i) => (
            <NavLink
              key={i}
              onClick={() => window.scrollTo({ top: 0 })}
              to={name === "Home" ? "/" : formatToUrl(name)}
              className="font-rubik text-lg text-white cursor-pointer"
            >
              {name}
            </NavLink>
          ))}
        </div> */}
        <div className="flex flex-col gap-4">
          <h1 className="font-rubik font-medium text-white text-2xl pb-2">
            Information
          </h1>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}
