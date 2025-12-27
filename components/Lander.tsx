"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { WavyBackground } from "@/components/ui/wavy-background";

interface LanderProps {
  title: string[];
  images:
    | Array<{
        image: string;
        position: string;
      }>
    | [];
}

export default function Lander({ title, images }: LanderProps) {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % title.length);
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [title.length, images]);

  const hasMultipleImages = images && images.length > 1;

  return (
    <div className="max-w-screen overflow-hidden h-screen flex flex-col lg:flex-row justify-center bg-white">
      {/* Text and Wavy Background Section */}
      <div className="w-full lg:w-1/2 relative h-full lg:min-h-screen ">
        <WavyBackground
          backgroundFill="white"
          colors={["#f15c23", "#012d6b", "#d8c4b5"]}
          className="absolute h-full w-full flex flex-col justify-center z-10 "
        >
          <div className="w-full mt-10 md:mt-20 xl:mt-0 lg:w-[80%] h-1/2 xl:h-fit flex flex-col justify-center px-6 md:px-10 lg:ml-15 gap-4 md:gap-5  lg:py-0  ">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTitle}
                className="flex flex-row gap-2 lg:w-full w-[70%] h-[100px] lg:h-[120px] xl:h-[150px] 2xl:h-[200px]"
              >
                <h1 className="text-navy text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black leading-tight md:leading-10 xl:leading-12 2xl:leading-17 tracking-tight justify-center items-center flex  ">
                  <motion.p
                    key={currentTitle}
                    className="flex flex-wrap gap-x-2 md:gap-x-3 "
                  >
                    {title[currentTitle].split(" ").map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 * index }}
                        className="flex flex-wrap"
                      >
                        {word}
                        <br className="hidden sm:block" />
                      </motion.span>
                    ))}
                  </motion.p>
                </h1>
              </motion.div>
            </AnimatePresence>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-black/90 text-[12px] sm:text-sm font-medium w-[90%] lg:w-[80%] "
            >
              We boost UK-India trade, investment and collaboration. Connecting
              businesses to thrive through ideas, networks and impact.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              href="/#"
              className="group h-fit bg-tiger font-dmsans font-semibold text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full text-base sm:text-lg md:text-xl hover:bg-navy transition-colors duration-300 tracking-tighter flex flex-row items-center gap-2 w-fit"
            >
              Become a member
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 sm:size-5 font-bold stroke-3 hidden group-hover:flex transition-transform duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </motion.a>
          </div>

          <div className="w-full md:w-[70%] h-1/2 mt-auto p-10 rounded-xl lg:hidden flex">
            <ImageSlider
              hasMultipleImages={hasMultipleImages}
              currentImage={currentImage}
              images={images}
            />
          </div>
        </WavyBackground>
      </div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 , delay: 0.2 }}
       
        className="w-full hidden lg:flex lg:w-1/2 h-1/2  sm:h-[60vh] lg:h-screen flex flex-col items-center justify-center relative"
      >
        <ImageSlider
          hasMultipleImages={hasMultipleImages}
          currentImage={currentImage}
          images={images}
        />
      </motion.div>
    </div>
  );
}

function ImageSlider({
  hasMultipleImages,
  currentImage,
  images,
}: {
  hasMultipleImages: boolean;
  currentImage: number;
  images: { image: string; position: string }[];
}) {
  return (
    <div className="w-full h-full  flex items-center justify-center overflow-hidden xl:rounded-none rounded-xl">
      {/* slideshow images */}
      {hasMultipleImages ? (
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={currentImage}
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 10 }}
            className="w-full h-full"
          >
            <div className="w-full h-full relative">
              <Image
                src={images![currentImage].image}
                alt="logo"
                width={0}
                height={0}
                sizes="100vw"
                className={`w-full h-full rounded-xl object-cover scale-110 object-[${
                  images![currentImage].position
                }]`}
                priority
              />
              {/* color overlay */}
              <div className="absolute inset-0 w-full h-full bg-"></div>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="w-full h-full absolute inset-0">
          <Image
            src={images![0].image}
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            className={`w-full h-full object-cover scale-110 object-[${
              images![0].position
            }] opacity-50`}
            priority
          />
        </div>
      )}
    </div>
  );
}
