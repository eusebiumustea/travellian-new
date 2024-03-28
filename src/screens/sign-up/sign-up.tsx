import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { Logo } from "../../assets";
import { firebaseApp } from "../../firebase";

export function SignUp() {
  const { currentUser } = getAuth();

  useEffect(() => {
    if (currentUser) {
      nav("/");
    }
  }, []);

  const formState = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
  });
  const auth = getAuth(firebaseApp);
  const nav = useNavigate();

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col justify-center items-center rounded-3xl shadow-2xl gap-4 md:gap-6 py-16 px-8">
        <Logo />
        <h1 className=" text-slate-950 font-rubik text-2xl">
          Create new account
        </h1>

        <form
          onSubmit={formState.handleSubmit(
            async ({ email, name, password }) => {
              try {
                const result = await createUserWithEmailAndPassword(
                  auth,
                  email,
                  password
                );

                await updateProfile(result.user, { displayName: name });
                nav("/");
              } catch (error: any) {
                if (error?.code === "auth/email-already-in-use") {
                  formState.setError("email", {
                    message: "An account with this email already exists",
                  });
                }
              }
            }
          )}
        >
          <div className="flex flex-col justify-center items-center gap-3">
            <FormProvider {...formState}>
              <input
                type="text"
                {...formState.register("name", {
                  required: { value: true, message: "Please write name" },
                })}
                className="py-3 md:w-96 px-2 outline-none border-2 rounded-xl font-rubik text-slate-950 text-xl"
                placeholder="Enter your name"
              />
              <h1 className="font-rubik text-amber-700">
                {formState.formState.errors.name?.message}
              </h1>
              <input
                type="email"
                {...formState.register("email", {
                  required: {
                    value: true,
                    message: "You must provide an email",
                  },
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value must be valid email",
                  },
                })}
                className="py-3 md:w-96 px-2   outline-none border-2 rounded-xl font-rubik text-slate-950 text-xl"
                placeholder="Enter your email"
              />
              <h1 className="font-rubik text-amber-700">
                {formState.formState.errors.email?.message}
              </h1>
              <input
                type="password"
                {...formState.register("password", {
                  required: { value: true, message: "Password required" },
                  minLength: {
                    value: 8,
                    message:
                      "You need a strong password that contains at least 8 characters",
                  },
                })}
                className="py-3 md:w-96 px-2   outline-none border-2 rounded-xl font-rubik text-slate-950 text-xl"
                placeholder="Enter password"
              />
              <h1 className="font-rubik text-amber-700">
                {formState.formState.errors.password?.message}
              </h1>
              <input
                type="password"
                {...formState.register("confirmPassword", {
                  required: {
                    value: true,
                    message: "You need to confirm your password",
                  },
                  validate: (confirmPassword, { password }) =>
                    password !== confirmPassword
                      ? "Please confirm correct password!"
                      : undefined,
                })}
                className="py-3 md:w-96 px-2   outline-none border-2 rounded-xl font-rubik text-slate-950 text-xl"
                placeholder="Confirm password"
              />
              <h1 className="font-rubik text-amber-700">
                {formState.formState.errors.confirmPassword?.message}
              </h1>
            </FormProvider>
            <button
              type="submit"
              className="uppercase font-rubik px-11 py-4 bg-slate-900 text-white rounded-xl"
            >
              Sign Up
            </button>
          </div>
        </form>
        <NavLink
          to={"/authentification/log-in"}
          className="font-rubik text-slate-950 text-xl"
        >
          Already have an account?
        </NavLink>
      </div>
    </div>
  );
}
