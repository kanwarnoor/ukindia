import { AnimatePresence, motion, time } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageSliderProps {
  rounded?: boolean;
  animation?: "none" | "up" | "zoom";
  time?: number;
  images: { image: string; position: string }[];
}

export default function ImageSlider({
  rounded = false,
  animation = "zoom",
  time,
  images,
}: ImageSliderProps) {
  const [currentImageState, setCurrentImageState] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => {
        setCurrentImageState((prev) => (prev + 1) % images.length);
      },
      time ? time : 5000
    );
    return () => clearInterval(interval);
  }, [images, currentImageState]);
  return (
    <div
      className={`w-full h-full  flex items-center justify-center overflow-hidden ${
        rounded ? "rounded-4xl" : ""
      }`}
    >
      {/* slideshow images */}
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={currentImageState}
          initial={{ scale: 1, y: 0 }}
          animate={
            animation === "zoom"
              ? { scale: 1.1 }
              : animation === "up"
              ? { y: -10 }
              : {}
          }
          transition={
            animation === "zoom"
              ? { duration: 10 }
              : animation === "up"
              ? { duration: 10, y: { ease: "easeInOut" } }
              : {}
          }
          className="w-full h-full"
        >
          <div className="w-full h-full relative ">
            <Image
              src={images![currentImageState].image}
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              className={`w-full h-full object-cover scale-110 ${
                rounded ? "rounded-4xl" : ""
              } object-[${images![currentImageState].position}]`}
              priority
            />
            {/* color overlay */}
            <div className="absolute inset-0 w-full h-full bg-"></div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
