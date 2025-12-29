import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageSlider({
  hasMultipleImages,
  currentImage,
  images,
}: {
  hasMultipleImages: boolean;
  currentImage: number;
  images: { image: string; position: string }[];
}) {
  const [currentImageState, setCurrentImageState] = useState(0);
  useEffect(() => {
    if (hasMultipleImages) {
      const interval = setInterval(() => {
        setCurrentImageState((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [hasMultipleImages, images, currentImageState]);
  return (
    <div className="w-full h-full  flex items-center justify-center overflow-hidden xl:rounded-none rounded-xl">
      {/* slideshow images */}
      {hasMultipleImages ? (
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
                className={`w-full h-full rounded-xl object-cover scale-110 object-[${
                  images![currentImageState].position
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
