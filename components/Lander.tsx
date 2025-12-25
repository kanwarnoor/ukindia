"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
    <div className="w-full h-screen flex items-center justify-center bg-black pt-25">
      <div className="w-full h-full absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* slideshow images */}
        {hasMultipleImages ? (
          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={currentImage}
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 10 }}
              className="w-full h-full absolute inset-0"
            >
              <div className="w-full h-full relative mt-25">
                <Image
                  src={images![currentImage].image}
                  alt="logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={`w-full h-full object-cover scale-110 object-[${images![currentImage].position}] opacity-50`}
                  priority
                />
                {/* color overlay */}
                {/* <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    background: "linear-gradient(90deg, rgba(30, 64, 175, 0.42) 0%, rgba(59, 130, 246, 0.32) 100%)",
                    pointerEvents: "none",
                    mixBlendMode: "multiply",
                  }}
                ></div> */}
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
              className={`w-full h-full object-cover scale-110 object-[${images![0].position}] opacity-50`}
              priority
            />
          </div>
        )}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.7 }}
          className="md:w-[60%] w-[70%] z-10"
        >
          <h1 className="text-4xl text-white md:text-5xl lg:text-7xl font-extrabold text-center">
            {title[currentTitle]}
          </h1>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
