type WelcomeTypes = {
  title: string;
  subtitle: string;
};
export function Welcome({ title, subtitle }: WelcomeTypes) {
  return (
    <div className={"flex flex-col items-start gap-4"}>
      <h1 className={"font-playfair text-7xl text-white space-y-7"}>{title}</h1>
      <h1 className={"font-rubik text-2xl text-white"}>{subtitle}</h1>
    </div>
  );
}
