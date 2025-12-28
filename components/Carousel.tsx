"use client";

import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

interface CarouselProps {
  data: Array<{
    quote: string;
    name: string;
    role: string;
    image: string;
  }>;
}

export default function Carousel({ data }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    // Trigger initial selection to set the correct index
    emblaApi.emit("select");

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (isHovered) return; // Pause auto-scroll when hovered
    const interval = setInterval(() => {
      scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [scrollNext, isHovered]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <div
      className="relative w-full max-w-[1000px] mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden rounded-xl bg-mix" ref={emblaRef}>
        <div className="flex">
          {data.map((item, index) => (
            <div
              key={index}
              className="shrink-0 w-full h-[500px] flex items-center justify-center"
            >
              <div className="w-full h-full flex">
                {/* Image Section */}
                <div className="w-[30%] h-full rounded-l-md flex items-center justify-center">
                  <div className="w-[110px] h-[110px] flex items-center justify-center relative">
                    <Image
                      src={item.image || ""}
                      alt={item.name}
                      width={110}
                      height={110}
                      className="rounded-full object-cover w-full h-full flex z-10 "
                    />
                    <div className="w-[130px] h-[130px] absolute bg-navy rounded-full shadow-lg flex items-center justify-center"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-[70%] h-full rounded-r-md flex flex-col justify-start p-10">
                  <div>
                    <Image
                      src="/comma.png"
                      alt="quote-start"
                      width={40}
                      height={40}
                      className="w-10 h-10 invert-0 brightness-0 filter "
                    />
                    <p className="text-2xl font-medium text-gray-950">
                      {item.quote}
                    </p>
                    <p className="text-xl text-gray-800 font-bold mt-10">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-600 font-medium w-1/2">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={scrollPrev}
        className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full  flex items-center justify-center transition-colors z-20"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-10 text-navy "
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={scrollNext}
        className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full  flex items-center justify-center transition-colors z-20"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-10 text-navy rotate-180"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {data.map((item, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-200 ${
              selectedIndex === index
                ? "bg-navy scale-110"
                : "bg-navy/30 hover:bg-navy/60"
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
