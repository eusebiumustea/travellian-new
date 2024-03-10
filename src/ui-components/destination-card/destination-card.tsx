import { LocateIcon } from "../../assets";
import { DestinationCardProps } from "./types";

export function DestinationCard({
  locationName,
  destination,
  image,
}: DestinationCardProps) {
  return (
    <div className="w-[400px] h-[500px] flex flex-col">
      <img src={image} className="w-full h-full rounded-3xl object-cover" />
      <div className="flex flex-col gap-4 absolute z-10 mt-[400px] m-5">
        <h1 className="text-3xl font-playfair font-medium text-white">
          {locationName}
        </h1>
        <h1 className="text-2xl font-rubik flex flex-row gap-3 text-white">
          <LocateIcon />
          {destination}
        </h1>
      </div>
    </div>
  );
}
