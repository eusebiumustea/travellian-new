import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { Logo } from "../../assets";
import { firebaseApp } from "../../firebase";

export function LogIn() {
  const { currentUser } = getAuth();
  useEffect(() => {
    if (currentUser) {
      nav("/");
    }
  }, []);
  useEffect(() => {
    const subscribe = window.addEventListener("blur", () =>
      console.log("leaved")
    );
    return subscribe;
  }, []);
  const formState = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    reValidateMode: "onChange",
    mode: "onBlur",
  });
  const auth = getAuth(firebaseApp);
  const nav = useNavigate();

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col justify-center items-center rounded-3xl shadow-2xl gap-6 py-16 px-8">
        <Logo />
        <h1 className=" text-slate-950 font-rubik text-2xl">
          Login into your account
        </h1>
        <FormProvider {...formState}>
          <form
            onSubmit={formState.handleSubmit(async ({ email, password }) => {
              try {
                await signInWithEmailAndPassword(auth, email, password);
                nav("/");
              } catch (error: any) {
                console.log(error?.code);
                formState.setError("root", {
                  message: error?.code
                    .split("-")
                    .join(" ")
                    .split("/")
                    .slice(1)
                    .join(""),
                });
              }
            })}
          >
            <div className="flex flex-col justify-center items-center gap-3">
              <input
                {...formState.register("email", {
                  required: { value: true, message: "Email required" },
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value must be valid email",
                  },
                })}
                type="email"
                className="py-3 md:w-96 px-2   outline-none border-2 rounded-xl font-rubik text-slate-950 text-xl"
                placeholder="Enter your email"
              />
              <h1 className="text-orange-500">
                {formState.formState.errors.email?.message}
              </h1>
              <input
                {...formState.register("password", {
                  required: { value: true, message: "Password required" },
                })}
                type="password"
                className="py-3 md:w-96 px-2   outline-none border-2 rounded-xl font-rubik text-slate-950 text-xl"
                placeholder="Enter password"
              />
              <h1 className="text-orange-500">
                {formState.formState.errors.password?.message}
              </h1>
              <AnimatePresence>
                {formState.formState.errors.root?.message && (
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-orange-500 absolute top-2/3 m-12"
                  >
                    {formState.formState.errors.root.message}
                  </motion.h1>
                )}
              </AnimatePresence>

              <button
                type="submit"
                className="uppercase font-rubik px-11 py-4 bg-slate-900 text-white rounded-xl"
              >
                Log In
              </button>
            </div>
          </form>
        </FormProvider>

        <NavLink
          to={"/authentification/sign-up"}
          className="font-rubik text-slate-950 text-xl"
        >
          Create new account?
        </NavLink>
      </div>
    </div>
  );
}
