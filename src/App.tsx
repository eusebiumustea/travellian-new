import { Outlet } from "react-router-dom";
import { AuthDialog, Header } from "./ui-components";
import { useContext, useEffect, useState } from "react";
import { AuthContext, AuthProvider } from "./contexts";

export function App() {
  const [authDialog, setAuthDialog] = useState<"sign-up" | "log-in" | null>(
    null
  );
  const auth = useContext(AuthContext);

  useEffect(() => {
    if (auth?.user === null) {
      setAuthDialog("sign-up");
    }
  }, []);

  return (
    <AuthProvider>
      <Header
        onSignUpOpen={() => setAuthDialog("sign-up")}
        onLogInOpen={() => setAuthDialog("log-in")}
      />
      <AuthDialog show={authDialog} onClose={() => setAuthDialog(null)} />
      <Outlet />
    </AuthProvider>
  );
}
