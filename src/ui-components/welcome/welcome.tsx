type WelcomeTypes = {
  title: string;
  subtitle: string;
};
export function Welcome({ title, subtitle }: WelcomeTypes) {
  return (
    <div className={"flex flex-col items-start gap-5 mx-4"}>
      <h1
        className={
          "font-playfair text-2xl sm:text-5xl md:text-6xl lg:text-8xl text-white m-auto md:m-0"
        }
      >
        {title}
      </h1>
      <h1 className={"font-rubik text-2xl text-white m-auto md:m-0"}>
        {subtitle}
      </h1>
    </div>
  );
}
