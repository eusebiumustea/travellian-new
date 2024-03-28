import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseApp } from "../firebase";
interface AuthContextType {
  user: User | null;
}
export const AuthContext = createContext<AuthContextType>({ user: null });

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<null | User>(null);
  const nav = useNavigate();
  const auth = getAuth(firebaseApp);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        nav("/");
      }
      if (!user) {
        setUser(null);
        nav("/authentification/log-in");
      }
    });
    return () => {
      listen();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
