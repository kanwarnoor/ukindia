"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CarouselProps {
  data: Array<{
    quote: string;
    name: string;
    role: string;
    image: string;
  }>;
}

export default function Carousel({ data }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [y, setY] = useState(0);

  const [newData, setNewData] = useState([...data, ...data]);

  const Next = () => {
    setIndex((prev) => {
      const newIndex = prev === data.length - 1 ? 0 : prev + 1;
      setY(-166 * newIndex);
      return newIndex;
    });
  };

  const Prev = () => {
    setIndex((prev) => {
      const newIndex = prev === 0 ? data.length - 1 : prev - 1;
      setY(-166 * newIndex);
      return newIndex;
    });
  };

  const scrollTo = (idx: number) => {
    if (idx > data.length - 1) {
      setY(0);
      setIndex(0);
    } else if (idx < 0) {
      setY(-166 * (data.length - 1));
      setIndex(0);
    } else {
      setY(-166 * idx);
      setIndex(idx);
    }
  };

  return (
    <div className="relative w-full max-w-[1000px] h-[500px] overflow-hidden mx-auto flex flex-row gap-5 ">
      <div className="w-fit h-full relative flex flex-row sm:flex-row bg-white rounded-4xl">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: `${y}px` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-fit h-full  items-center flex flex-col rounded-4xl gap-4 p-3"
        >
          {newData.map((item: { image: string; name: string }, idx: number) => (
            <div
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`w-[100px] h-[100px] md:w-[250px] rounded-4xl md:h-[150px] flex items-center justify-center relative transition-all duration-300 cursor-pointer ${
                idx === index ? "border-4 border-tiger/70 md:h-[250px]" : "grayscale"
              }`}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={0}
                height={0}
                sizes="100%"
                className="rounded-3xl object-cover w-full h-full flex z-10 "
              />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="overflow-hidden rounded-3xl bg-white  ">
        <div className="flex">
          <div
            key={index}
            className="shrink-0 w-full min-h-[400px] sm:h-[500px] flex items-center justify-center"
          >
            <div className="w-full h-full flex flex-col sm:flex-row">
              <div className="w-full h-full rounded-b-md sm:rounded-r-md sm:rounded-b-none flex flex-col justify-start p-4 sm:p-6 md:p-15">
                <div className="h-full flex flex-col justify-between">
                  {/* <Image
                      src="/comma.png"
                      alt="quote-start"
                      width={40}
                      height={40}
                      className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 invert-0 brightness-0 filter mb-2"
                    /> */}
                  <motion.p
                    className="text-sm sm:text-base md:text-xl font-bold text-gray-900 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    key={newData[index].quote}
                  >
                    {newData[index].quote}
                  </motion.p>
                  <div className="flex flex-col gap-2 mt-auto">
                    <motion.p
                      className="text-lg sm:text-xl text-gray-800 font-bold"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      key={newData[index].name}
                    >
                      {newData[index].name}
                    </motion.p>
                    <motion.p
                      className="text-xs sm:text-sm text-gray-600 font-medium w-full sm:w-1/2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      key={newData[index].role}
                    >
                      {newData[index].role}
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        className="absolute cursor-pointer left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors z-20 shadow-lg"
        aria-label="Previous slide"
        onClick={() => Prev()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-navy"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        className="absolute cursor-pointer right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors z-20 shadow-lg"
        aria-label="Next slide"
        onClick={() => Next()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-navy rotate-180"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* dots */}
      {/* <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-20">
        {data.map((item, my_index) => (
          <button
            key={my_index}
            type="button"
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all duration-200 ${
              index === my_index
                ? "bg-navy scale-110"
                : "bg-navy/30 hover:bg-navy/60"
            }`}
            aria-label={`Go to slide ${my_index + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
}
