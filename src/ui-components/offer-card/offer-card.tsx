import { Star } from "../../assets";
import { OfferCardProps } from "./types";

export function OfferCard({
  destination,
  reviews,
  description,
  price,
  image,
}: OfferCardProps) {
  return (
    <div className={`flex flex-col`}>
      <img
        src={image}
        className="object-cover w-full h-[200px] rounded-t-3xl"
      />
      <div className=" w-full flex flex-col px-6 py-3 md:py-8 bg-[#FFF8F1] rounded-b-3xl md:gap-2">
        <h1 className="font-rubik text-2xl text-placeholder">{destination}</h1>
        <div className="flex flex-row items-center gap-1">
          {new Array(reviews).fill(<Star />)}
        </div>
        <h1 className="font-rubik text-lg text-slate-900 pt-4">
          {description}
        </h1>
        <div className="flex flex-row justify-center items-center w-full gap-6">
          <h1 className="flex items-center gap-2 font-rubik text-xl text-placeholder">
            From <span className="text-primary text-3xl">{price}</span>
          </h1>
          <button className="uppercase bg-primary px-6 py-3 rounded-xl text-white font-rubik">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
