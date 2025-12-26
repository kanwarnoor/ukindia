"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

interface CompaniesProps {
  images: string[];
}

export default function Companies({ images }: CompaniesProps) {
  // Duplicate images for seamless infinite loop
  const duplicatedImages = [...images, ...images, ...images];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi || isHovered) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi, isHovered]);

  return (
    <div className="w-full h-fit flex justify-center items-center py-10 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div
          className="overflow-hidden"
          ref={emblaRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex gap-8">
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="shrink-0 flex items-center justify-center px-8"
                style={{ minWidth: "200px" }}
              >
                <div className="relative w-full h-24  hover:grayscale-0 transition-all duration-300 ">
                  <Image
                    src={image}
                    alt={`Company logo ${(index % images.length) + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 150px, 200px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
