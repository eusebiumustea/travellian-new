import { motion } from "framer-motion";
import { useState } from "react";
import { VectorLeft, VectorRight } from "../../assets";
import { CarouselProps } from "./types";
import { PostHeader } from "..";

export function Carousel<T>({
  renderItem,
  data,
  title,
  subtitle,
  scroll = 500,
  reverseHeader = false,
}: CarouselProps<T>) {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div className="flex flex-col gap-24 mt-20">
      <div className="flex flex-row justify-between w-full items-end  px-40">
        {!reverseHeader ? (
          <PostHeader title={title} subtitle={subtitle} />
        ) : (
          <div className="flex flex-row gap-10">
            <button
              onClick={() =>
                currentPage !== 0 && setCurrentPage((prev) => prev - 1)
              }
              className="p-3 rounded-lg bg-slate-900"
            >
              <VectorLeft />
            </button>
            <button
              onClick={() => {
                setCurrentPage((prev) => prev + 1);
              }}
              className="p-3 rounded-lg bg-slate-900"
            >
              <VectorRight />
            </button>
          </div>
        )}
        {!reverseHeader ? (
          <div className="flex flex-row gap-10">
            <button
              onClick={() =>
                currentPage !== 0 && setCurrentPage((prev) => prev - 1)
              }
              className="p-3 rounded-lg bg-slate-900"
            >
              <VectorLeft />
            </button>
            <button
              onClick={() => {
                setCurrentPage((prev) => prev + 1);
              }}
              className="p-3 rounded-lg bg-slate-900"
            >
              <VectorRight />
            </button>
          </div>
        ) : (
          <PostHeader title={title} subtitle={subtitle} />
        )}
      </div>
      <div className="overflow-hidden justify-center items-center pl-40">
        <motion.div
          transition={{ type: "just" }}
          className="flex flex-row justify-start items-center gap-8"
          animate={{
            translateX: currentPage * -scroll,
          }}
        >
          {data.map(renderItem)}
        </motion.div>
      </div>
    </div>
  );
}
