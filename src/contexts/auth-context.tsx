import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
type User = null | {
  name: string;
  email: string;
  age: number;
  avatar: string;
};
export type ContextState = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};
export const AuthContext = createContext<ContextState | null>(null);
export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User>(null);
  useEffect(() => {
    setUser({
      email: "eusebiu@gmail.com",
      name: "eusebiu",
      age: 19,
      avatar:
        "https://i.guim.co.uk/img/media/ccc826cd2961f5dc64b3e1283ac4224eab46a77f/0_383_5746_3448/master/5746.jpg?width=1200&quality=85&auto=format&fit=max&s=1d9ebbd3c8fa0e1f1ca4f8d94d97f958",
    });
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
