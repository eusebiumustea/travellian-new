import { useState } from "react";
import { Avatar, NavBar } from "..";
import { Logo, MenuIcon } from "../../assets";
import { useAuth } from "../../hooks";
import { HeaderProps } from "./types";
import { AnimatePresence, motion } from "framer-motion";

export function Header({ onLogInOpen, onSignUpOpen }: HeaderProps) {
  const { user, setUser } = useAuth();
  const [expandOptions, setExpandOptions] = useState(false);

  return (
    <div
      className={
        "flex flex-row items-center content-center justify-between m-2 lg:m-4 relative z-20"
      }
    >
      <Logo />
      <MenuIcon />
      <NavBar />
      {user && (
        <div
          onMouseOver={() => setExpandOptions(true)}
          onMouseOut={() => setExpandOptions(false)}
          className="flex flex-row items-center gap-2"
        >
          <AnimatePresence>
            {expandOptions && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="px-7 py-2 bg-white font-rubik rounded-xl hover:bg-black hover:text-white transition-all"
                onClick={() => setUser(null)}
              >
                Sign out
              </motion.button>
            )}
          </AnimatePresence>
          <Avatar src={user.avatar} />
        </div>
      )}
      {!user && (
        <div className="flex-row items-center hidden md:flex">
          <button
            onClick={onLogInOpen}
            className="px-4 py-1 lg:px-8 lg:py-4 text-primary font-rubik text-sm rounded-xl"
          >
            Log In
          </button>
          <button
            onClick={onSignUpOpen}
            className="px-6 py-2 lg:px-8 lg:py-4 bg-primary text-white font-rubik text-sm rounded-xl"
          >
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
}
