import { PostHeaderProps } from "./types";

export function PostHeader({ title, subtitle }: PostHeaderProps) {
  return (
    <div className="flex flex-col justify-start gap-5">
      <h1 className="font-playfair text-4xl md:text-6xl text-black">{title}</h1>
      <div className="w-2/4 h-0.5 bg-primary" />
      <h1 className="font-rubik text-lg text-placeholder mt-2">{subtitle}</h1>
    </div>
  );
}
