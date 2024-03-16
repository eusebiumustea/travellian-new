import { LocateIcon } from "../../assets";
import { DestinationCardProps } from "./types";

export function DestinationCard({
  locationName,
  destination,
  image,
}: DestinationCardProps) {
  return (
    <div className="flex flex-col mx-4">
      <img src={image} className="w-full  h-[480px] rounded-3xl object-cover" />
      <div className="flex flex-col gap-4 bottom-28 left-8 relative">
        <h1 className="text-2xl font-playfair font-medium text-white">
          {locationName}
        </h1>
        <h1 className="text-xl font-rubik flex flex-row gap-3 text-white">
          <LocateIcon />
          {destination}
        </h1>
      </div>
    </div>
  );
}
