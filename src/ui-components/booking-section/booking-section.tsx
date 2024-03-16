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
    <div className="flex flex-col md:flex-row justify-between lg:mr-[26%] md:mr-[18%] m-4 md:m-0 md:rounded-none md:rounded-r-xl rounded-xl bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 py-16 md:py-8 justify-center px-9 gap-12 items-center">
        <div className="flex flex-col gap-3">
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
            className="border-b-2 border-black py-3 md:py-0 lg:text-base text-2xl font-playfair"
          />
        </div>
        <div className="flex flex-col gap-3">
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
            className=" border-b-2 border-black py-3 md:py-0 lg:text-base text-2xl font-playfair"
          />
        </div>
        <div className="flex flex-col gap-3">
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
            className=" border-b-2 border-black py-3 md:py-0 lg:text-base text-2xl font-playfair"
          />
        </div>
        <div className="flex flex-col gap-3">
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
            className=" border-b-2 border-black py-3 md:py-0 lg:text-base text-2xl font-playfair"
          />
        </div>
      </div>
      <button className="flex flex-row items-center justify-center h-full  md:rounded-r-xl py-16 px-6 bg-primary gap-9">
        <h1 className="font-playfair text-4xl text-white">Book Now</h1>
        <Arrow />
      </button>
    </div>
  );
}
