import { NavLink } from "react-router-dom";
import { PostHeader } from "..";
import { BlogPostProps } from "./types";
import { Arrow } from "../../assets";

export function BlogPost({ title, image, description }: BlogPostProps) {
  return (
    <div className="flex flex-col mx-44 items-start justify-start mt-11">
      <PostHeader
        title="Our Blog"
        subtitle="An insight the incredible experience in the world"
      />
      <div className="flex flex-row items-center gap-8 mt-10">
        <img
          src={image}
          className="rounded-3xl w-[400px] h-[600px] object-cover"
        />
        <div className="flex flex-col gap-6 w-1/2">
          <h1 className="font-playfair text-5xl text-slate-900">{title}</h1>
          <h1 className="font-rubik text-xl text-slate-900">{description}</h1>
          <NavLink
            to={"#"}
            className="flex flex-row gap-4 items-center font-rubik text-xl text-primary w-1/4"
          >
            Read More <Arrow fill="#FF7757" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
