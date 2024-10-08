import { BookingSection, Welcome } from "../../ui-components";
export function Home() {
  return (
    <>
      <img
        className="object-cover w-screen h-[180vh] md:h-screen"
        src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
      />
      <div
        id="home"
        className={
          "flex flex-col justify-center gap-[10vh] w-full h-[140vh] md:h-screen z-10 absolute top-0 md:mt-16 mt-[25vh]"
        }
      >
        <Welcome
          title="Start your unforgettable 
journey with us."
          subtitle="The best travel for your jouney begins now"
        />
        <BookingSection />
      </div>
    </>
  );
}
