import { useContext } from "react";
import { AuthContext, ContextState } from "../contexts";

export const useAuth = () => {
  const context = useContext(AuthContext);

  return { ...context } as ContextState;
};
