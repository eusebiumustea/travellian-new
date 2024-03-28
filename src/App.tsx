import { useState } from "react";
import { Blog, Explore, Home, Pricing, Travel } from "./screens";
import { BottomSection, Header, MobileNav } from "./ui-components";
import { AuthProvider } from "./contexts";

export function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <AuthProvider>
      <MobileNav opened={mobileMenu} onClose={() => setMobileMenu(false)} />
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
