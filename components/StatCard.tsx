"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function StatCard({
  title,
  number,
  valueAfter,
  valueBefore,
  description,
  link,
}: {
  title: string;
  number: number;
  valueAfter: string;
  valueBefore: string;
  description: string;
  link: string;
}) {
  const [displayedNumber, setDisplayedNumber] = useState(0);
  const duration = 2000; // total duration of animation in ms
  const frame = useRef<number>(0);

  useEffect(() => {
    let start: number | null = null;

    function animateCountUp(timestamp: number) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const easedProgress = Math.min(progress / duration, 1);
      const currentValue = Math.floor(easedProgress * number);

      setDisplayedNumber(currentValue);

      if (easedProgress < 1) {
        frame.current = requestAnimationFrame(animateCountUp);
      } else {
        setDisplayedNumber(number);
      }
    }

    frame.current = requestAnimationFrame(animateCountUp);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [number]);

  return (
    <motion.div
     
      onViewportLeave={() => {
        setDisplayedNumber(0);
        frame.current = requestAnimationFrame((timestamp: number) => {
          let start: number | null = null;
          function animateCountUp(ts: number) {
            if (!start) start = ts;
            const progress = ts - start;
            const easedProgress = Math.min(progress / duration, 1);
            const currentValue = Math.floor(easedProgress * number);
            setDisplayedNumber(currentValue);
            if (easedProgress < 1) {
              frame.current = requestAnimationFrame(animateCountUp);
            } else {
              setDisplayedNumber(number);
            }
          }
          animateCountUp(timestamp);
        });
      }}
      className="flex flex-col gap-1  w-[350px] h-[250px] "
    >
      <p className="text-xl font-bold ">{title}</p>
      <span className="text-ukindia text-5xl font-bold">
        {valueBefore}
        {displayedNumber}
        {valueAfter}
      </span>
      <p className="text-xl font-medium text-ukindia font-bold">
        {description}
      </p>
      <hr className="w-1/2 mx-auto h-2 my-3" />
      <a href={link} className="underline text-medium text-gray-600">
        Read More..
      </a>
    </motion.div>
  );
}
