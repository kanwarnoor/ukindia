"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { AuroraBackground } from "@/components/ui/aurora-background";

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

  const [hover, setHover] = useState(false);

  return (
    <AuroraBackground showRadialGradient={true}>
      <div className="w-full h-screen flex flex-row justify-center bg-white ">
        <div className="w-1/2 h-full flex flex-col  justify-center z-10">
          <div className="w-[80%] h-full flex flex-col justify-center ml-15 gap-5">
            <AnimatePresence mode="wait">
              <motion.div key={currentTitle} className="flex flex-row gap-2">
                <h1 className=" text-navy md:text-4xl xl:text-6xl lg:text-4xl font-black leading-17 heading tracking-tight h-50 justify-center items-center flex">
                  <motion.p
                    key={currentTitle}
                    className="flex flex-wrap gap-x-3 "
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
                        <br />
                      </motion.span>
                    ))}
                  </motion.p>
                </h1>
              </motion.div>
            </AnimatePresence>
            <p className="text-black/90 text-base font-medium w-[60%]">
              We are a team of experts who are passionate about helping you
              achieve your goals.
            </p>

            <motion.a
              initial={{ width: "fit-content" }}
              animate={{ width: "fit-content" }}
              transition={{ duration: 0.7 }}
              href="/#"
              className=" group h-fit bg-tiger font-family-dmsans font-semibold text-white px-5 py-2 rounded-full text-xl hover:bg-navy transition-colors duration-300 tracking-tighter flex flex-row items-center gap-2"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Become a member
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 font-bold stroke-3 hidden group-hover:flex transition-transform duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </motion.a>
          </div>
        </div>

        {/* image div */}
        <div className="w-1/2 h-full flex flex-col items-center justify-center ">
          <ImageSlider
            hasMultipleImages={hasMultipleImages}
            currentImage={currentImage}
            images={images}
          />
        </div>
      </div>
    </AuroraBackground>
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
    <div className="w-full h-full  flex items-center justify-center overflow-hidden ">
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
                className={`w-full h-full object-cover scale-110 object-[${
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
