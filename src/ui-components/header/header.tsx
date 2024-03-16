import { getAuth, signOut } from "firebase/auth";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Avatar, NavBar } from "..";
import { Logo, MenuIcon } from "../../assets";
import { useNavigate } from "react-router-dom";
import { firebaseApp } from "../../firebase";

export function Header() {
  const auth = getAuth(firebaseApp);
  const [expandOptions, setExpandOptions] = useState(false);
  const nav = useNavigate();
  return (
    <div className={"p-2 fixed z-20 w-full py-3 backdrop-brightness-50"}>
      <div className="w-full flex flex-row items-center content-center justify-between">
        <Logo />
        <MenuIcon />
        <NavBar />
        <AnimatePresence>
          {auth.currentUser && expandOptions && (
            <motion.div
              onMouseOver={() => setExpandOptions(true)}
              onMouseOut={() => setExpandOptions(false)}
              className="flex flex-col gap-5 items-center absolute right-0 top-12 bg-white rounded-xl p-4 shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h1>{auth.currentUser.displayName}</h1>
              <h1>{auth.currentUser.email}</h1>
              <button
                className="px-7 py-2 bg-white font-rubik rounded-xl hover:bg-black hover:text-white transition-all border-2 border-black"
                onClick={async () => {
                  await signOut(auth);
                }}
              >
                Sign out
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        {auth.currentUser && (
          <Avatar
            onMouseOver={() => setExpandOptions(true)}
            onMouseOut={() => setExpandOptions(false)}
            src={
              auth.currentUser.photoURL
                ? auth.currentUser.photoURL
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
          />
        )}
        {!auth.currentUser && (
          <div className="flex-row items-center hidden md:flex">
            <button
              onClick={() => nav("/log-in")}
              className="px-4 py-1 lg:px-8 lg:py-4 text-primary font-rubik text-sm rounded-xl"
            >
              Log In
            </button>
            <button
              onClick={() => nav("/sign-up")}
              className="px-6 py-2 lg:px-8 lg:py-4 bg-primary text-white font-rubik text-sm rounded-xl"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
