import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseApp } from "../firebase";

export function useAuthListener() {
  const nav = useNavigate();
  const auth = getAuth(firebaseApp);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        nav("/");
      }
      if (!user) {
        nav("/authentification/log-in");
      }
    });
    return () => {
      listen();
    };
  }, []);
}
