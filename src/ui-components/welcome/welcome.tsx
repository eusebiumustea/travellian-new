type WelcomeTypes = {
  title: string;
  subtitle: string;
};
export function Welcome({ title, subtitle }: WelcomeTypes) {
  return (
    <div className={"flex flex-col items-start gap-5"}>
      <h1
        className={
          "font-playfair text-2xl sm:text-5xl md:text-6xl lg:text-8xl text-white m-auto"
        }
      >
        {title}
      </h1>
      <h1 className={"font-rubik text-2xl text-white"}>{subtitle}</h1>
    </div>
  );
}
