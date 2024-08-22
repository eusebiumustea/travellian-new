import { useEffect, useState } from "react";
import { Blog, Explore, Home, Pricing, Travel } from "./screens";
import { BottomSection, Header, MobileNav } from "./ui-components";
import { AuthProvider } from "./contexts";
import { AnimatePresence } from "framer-motion";

export function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenu]);
  return (
    <AuthProvider>
      <AnimatePresence>
        {mobileMenu && <MobileNav onClose={() => setMobileMenu(false)} />}
      </AnimatePresence>
      <Header onMenuOpen={() => setMobileMenu(true)} />
      <Home />
      <Explore />
      <Travel />
      <Blog />
      <Pricing />
      <BottomSection />
    </AuthProvider>
  );
}
