import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface LandscapeCardProps {
  title1: string;
  date?: string;
  landscape?: boolean;
  image: string;
  link: string;
  animation: "left" | "center" | "right";
  key?: React.Key;
}

export default function LandscapeCard({
  title1,
  date,
  landscape,
  image,
  link,
  animation,
  key,
}: LandscapeCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: animation == "left" ? "-10%" : animation === "center" ? "0" : "10%",
        y: animation == "center" ? "10%" : "0%",
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
      className="flex flex-col cursor-pointer md:w-[350px] md:h-[400px] w-[300px] h-[340px] bg-black/90  rounded-2xl"
      onClick={() => window.open(link)}
    >
      <div className="w-full aspect-video  overflow-hidden">
        <Image
          src={image}
          alt={title1}
          width={0}
          height={0}
          sizes="100vw"
          className="object-cover object-center duration-300 rounded-t-2xl w-full h-full"
        />
      </div>
      <div className="w-full h-1/3  rounded-b-2xl p-5">
        <h3 className="text-white text-xl font-bold line-clamp-4">{title1}</h3>
        <p className="text-white text-sm font-medium">
          {date
            ? (() => {
                const d = new Date(date);
                if (isNaN(d as unknown as number)) return date;
                const day = d.getDate();
                const ordinal =
                  day % 10 === 1 && day !== 11
                    ? "st"
                    : day % 10 === 2 && day !== 12
                    ? "nd"
                    : day % 10 === 3 && day !== 13
                    ? "rd"
                    : "th";
                const month = d
                  .toLocaleString("en-US", { month: "long" })
                  .toLowerCase();
                const year = d.getFullYear();
                return `${day}${ordinal} ${month} ${year}`;
              })()
            : ""}
        </p>
      </div>
    </motion.div>
  );
}
