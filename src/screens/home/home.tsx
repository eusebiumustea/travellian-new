import { BookingSection, Welcome } from "../../ui-components";

export function Home() {
  return (
    <>
      <img
        className="object-cover w-full  h-screen top-0 absolute"
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
    </>
  );
}
