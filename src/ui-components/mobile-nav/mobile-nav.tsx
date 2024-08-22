import { getAuth, signOut } from "firebase/auth";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Avatar } from "..";
import { CloseIcon } from "../../assets";
import { menuItems } from "../../constants";
import { firebaseApp } from "../../firebase";
import { useAuthContext } from "../../hooks";

interface MobileMenuProps {
  onClose: () => void;
}
export function MobileNav({ onClose }: MobileMenuProps) {
  useEffect(() => {
    const listener = window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        onClose();
      }
    });
    return () => window.removeEventListener("resize", () => listener);
  }, []);

  const { user } = useAuthContext();
  const auth = getAuth(firebaseApp);
  return (
    <motion.div
      transition={{ type: "tween", duration: 0.2 }}
      initial={{ translateX: "100%" }}
      animate={{ translateX: "0%" }}
      exit={{ translateX: "100%" }}
      className="flex w-full h-[100vh] bg-slate-900 fixed z-40 items-center justify-center"
    >
      <div className="flex flex-row items-center w-full p-4 justify-between absolute top-0">
        {user && (
          <div className="flex flex-row items-center gap-4">
            <Avatar
              className="rounded-full w-12 h-12 object-cover"
              src={
                user.photoURL
                  ? user.photoURL
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              }
            />
            <div>
              <h1 className="text-white">{user.displayName}</h1>
              <h1 className="text-white">{user.email}</h1>
              <button
                className="px-4 absolute mt-1 py-1 bg-white font-rubik rounded-xl hover:bg-black hover:text-white transition-all border-2 border-black"
                onClick={async () => {
                  await signOut(auth);
                }}
              >
                Sign out
              </button>
            </div>
          </div>
        )}

        <CloseIcon onClick={onClose} />
      </div>

      <div className={"flex flex-col items-center content-between gap-y-12"}>
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
          <a
            href={`#${name}`}
            onClick={() => {
              onClose();
            }}
            key={i}
            className={`select-none cursor-pointer inline-block border-primary font-rubik text-white text-4xl`}
          >
            {name}
          </a>
        ))}
      </div>
    </motion.div>
  );
}
