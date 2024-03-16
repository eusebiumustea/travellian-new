import { useAuthListener } from "./hooks";
import { Blog, Explore, Home, Pricing, Travel } from "./screens";
import { BottomSection, Header } from "./ui-components";

export function App() {
  useAuthListener();
  return (
    <>
      <Header />
      <Home />
      <Explore />
      <Travel />
      <Blog />
      <Pricing />
      <BottomSection />
    </>
  );
}
