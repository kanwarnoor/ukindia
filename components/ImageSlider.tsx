import { AnimatePresence, motion, time } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageSlider({
  time,
  images,
}: {
  time?: number;
  images: { image: string; position: string }[];
}) {
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
    <div className="w-full h-full  flex items-center justify-center overflow-hidden xl:rounded-none">
      {/* slideshow images */}
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={currentImageState}
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 10 }}
          className="w-full h-full"
        >
          <div className="w-full h-full relative">
            <Image
              src={images![currentImageState].image}
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              className={`w-full h-full object-cover scale-110 object-[${
                images![currentImageState].position
              }]`}
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
