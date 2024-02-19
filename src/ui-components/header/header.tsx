import { useLocation } from "react-router-dom";
import { NavBar } from "..";
import { Logo } from "../../assets";

export function Header() {
  const { pathname } = useLocation();
  return (
    <div
      className={"flex flex-row items-center justify-between m-4 relative z-20"}
    >
      <Logo />
      <NavBar />
      <div className=" flex flex-row items-center">
        <button className="px-8 py-5  text-primary font-rubik text-xl rounded-xl">
          Log In
        </button>
        <button className="px-8 py-5 bg-primary text-white font-rubik text-xl rounded-xl">
          Sign Up
        </button>
      </div>
    </div>
  );
}
