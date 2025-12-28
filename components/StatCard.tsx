"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function StatCard({
  animation,
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
  animation: "left" | "center" | "right";
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
      initial={{
        opacity: 0,
        x: animation == "left" ? "-10%" : animation === "center" ? "0" : "10%",
        y: animation == "center" ? "10%" : "0%",
      }}
      animate={{
        transition: {
          duration: 0.5,
        },
      }}
      whileHover={{
        scale: 1.02,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.5,
        },
      }}
      transition={{
        duration: 0.1,
      }}

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
      <p className="text-xl font-bold text-navy">{title}</p>
      <span className="text-tiger text-5xl font-bold">
        {valueBefore}
        {displayedNumber}
        {valueAfter}
      </span>
      <p className="text-xl font-bold text-black font-bold">{description}</p>
      <hr className="w-1/2 mx-auto h-2 my-3 border-black" />
      <motion.a
        href={link}
        className="w-fit mx-auto font-bold text-navy border-2 border-navy rounded-full px-4 py-2 hover:bg-navy hover:text-white transition-all duration-200"
      >
        Read More
      </motion.a>
    </motion.div>
  );
}
