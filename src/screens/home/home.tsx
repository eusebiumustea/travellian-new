import { BookingSection, BottomSection, Welcome } from "../../ui-components";
export function Home() {
  return (
    <div className="absolute top-0">
      <img
        className="object-cover w-screen  h-screen"
        src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
      />

      <div
        className={
          "flex flex-col justify-center gap-44 w-full  h-screen z-10 absolute top-0"
        }
      >
        <Welcome
          title="Start your unforgettable 
journey with us."
          subtitle="The best travel for your jouney begins now"
        />
        <BookingSection />
      </div>
      <BottomSection />
    </div>
  );
}
