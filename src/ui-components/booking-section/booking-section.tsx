import { useState } from "react";
import { BookingState } from "./types";
import { Arrow } from "../../assets";

export function BookingSection() {
  const [bookingState, setBookingState] = useState<BookingState>({
    destination: "",
    person: 1,
    checkIn: new Date().toDateString(),
    checkOut: new Date().toDateString(),
  });
  return (
    <div className="flex flex-row justify-between w-auto max-w-7xl  rounded-r-xl bg-white">
      <div className="flex flex-row  gap-10 pl-16 items-center">
        <div className="flex flex-col">
          <h1 className="font-rubik uppercase text-base text-placeholder">
            Destination
          </h1>
          <input
            placeholder="e.g Paris"
            value={bookingState.destination}
            onChange={(e) =>
              setBookingState((prev) => ({
                ...prev,
                destination: e.target.value,
              }))
            }
            type="text"
            className=" border-b-2 border-black"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="font-rubik uppercase text-base text-placeholder">
            Person
          </h1>
          <input
            onChange={(e) =>
              setBookingState((prev) => ({
                ...prev,
                person: e.target.valueAsNumber,
              }))
            }
            type="number"
            value={bookingState.person}
            min={1}
            className=" border-b-2 border-black"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="font-rubik uppercase text-base text-placeholder">
            Check in
          </h1>
          <input
            value={bookingState.checkIn}
            min={new Date().toDateString()}
            onChange={(e) =>
              setBookingState((prev) => ({
                ...prev,
                checkIn: e.target.value,
              }))
            }
            type="datetime-local"
            className=" border-b-2 border-black"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="font-rubik uppercase text-base text-placeholder">
            Check out
          </h1>
          <input
            value={bookingState.checkOut}
            min={new Date().toDateString()}
            onChange={(e) =>
              setBookingState((prev) => ({
                ...prev,
                checkOut: e.target.value,
              }))
            }
            type="datetime-local"
            className=" border-b-2 border-black"
          />
        </div>
      </div>
      <button className="flex flex-row items-center justify-center h-full rounded-r-xl py-16 px-6 bg-primary gap-9">
        <h1 className="font-playfair text-4xl text-white">Book Now</h1>
        <Arrow />
      </button>
    </div>
  );
}
