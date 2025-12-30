"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

interface ZoomCardProps {
  data: {
    title: string;
    description?: string;
    image: string;
    link: string;
  }[];
}

export default function ZoomCard({ data }: ZoomCardProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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
    emblaApi.emit("select");
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!emblaApi || isHovered || data.length <= 1) return;

    const interval = setInterval(() => {
      // With loop: true, scrollNext() will automatically loop back smoothly
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi, isHovered, data.length]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full ">
          {data.map((item, index) => {
            return (
              <div
                key={`zoom-card-${index}`}
                className="shrink-0 flex justify-center items-center ml-3"
              >
                <BackgroundGradientAnimation
                  gradientBackgroundStart="rgb(1 45 107)"
                  gradientBackgroundEnd="rgb(0 11 25)"
                  firstColor="3, 107, 252"
                  secondColor="2, 87, 207"
                  thirdColor="1, 30, 71"
                  fourthColor="139, 187, 254"
                  fifthColor="139, 187, 254"
                  interactive={false}
                  containerClassName="h-full flex justify-center items-center rounded-xl w-[350px]"
                >
                  <div className="w-[80%] z-10 mx-auto h-full flex justify-center items-center absolute top-0 left-0 right-0 bottom-0">
                    <p className="leading-tight  w-full text-center text-white font-bold text-sm md:text-2xl">
                      {item.title}
                    </p>
                  </div>
                </BackgroundGradientAnimation>
                <div className="w-[350px] h-full ml-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={0}
                    height={0}
                    sizes="100%"
                    className="w-full h-full object-cover object-center rounded-xl"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Left gradient overlay */}
      <div
        className="absolute left-0 top-0 bottom-0 w-32 sm:w-40 md:w-48 xl:w-64 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.8), transparent)",
        }}
      />

      {/* Right gradient overlay */}
      <div
        className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 xl:w-64 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.5), transparent)",
        }}
      />
      {/* Navigation Buttons */}
      {data.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-0 sm:left-4  cursor-pointer top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/80 hover:bg-white flex items-center justify-center hover:scale-110 transition-all duration-100 z-20 shadow-lg"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-navy"
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
            className="absolute right-0 cursor-pointer top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12  md:h-12 rounded-full bg-white/80 hover:bg-white flex items-center justify-center hover:scale-110  transition-all duration-100 z-20 shadow-lg"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-navy rotate-180"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {data.length > 1 && (
        <div className="absolute bg-black/50 border border-mix backdrop-blur-sm px-4 py-2 rounded-full bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-20">
          {Array.from({ length: emblaApi?.scrollSnapList().length || 0 }).map(
            (_, index) => (
              <button
                key={index}
                type="button"
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all duration-200 ${
                  selectedIndex === index
                    ? "bg-white scale-110"
                    : "bg-white/30 hover:bg-white/60"
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 2}`}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}
