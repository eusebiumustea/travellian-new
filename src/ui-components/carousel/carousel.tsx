import { useRef } from "react";
import Slider from "react-slick";
import { PostHeader } from "..";
import { VectorLeft, VectorRight } from "../../assets";
import { CarouselProps } from "./types";

export function Carousel<T>({
  renderItem,
  data,
  title,
  subtitle,
  reverseHeader = false,
  itemsToShow = 3,
}: CarouselProps<T>) {
  const sliderRef = useRef<Slider>(null);
  return (
    <div className="flex flex-col gap-7 mx-20 md:gap-24 lg:mx-32">
      <div className="flex flex-row justify-between w-full items-center md:items-end">
        <PostHeader title={title} subtitle={subtitle} />
        <div className="md:flex flex-row gap-10 hidden">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="p-3 rounded-lg bg-slate-900"
          >
            <VectorLeft />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="p-3 rounded-lg bg-slate-900"
          >
            <VectorRight />
          </button>
        </div>
      </div>
      <Slider
        ref={sliderRef}
        slidesToScroll={itemsToShow}
        slidesToShow={itemsToShow}
        className={"overflow-hidden"}
        infinite={false}
        lazyLoad="progressive"
        responsive={[
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 1152,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {data.map(renderItem)}
      </Slider>
      <div className="flex flex-row gap-10 md:hidden justify-center">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="p-3 rounded-lg bg-slate-900"
        >
          <VectorLeft />
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="p-3 rounded-lg bg-slate-900"
        >
          <VectorRight />
        </button>
      </div>
    </div>
  );
}
