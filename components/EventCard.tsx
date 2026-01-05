import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface EventCardProps {
  title1: string;
  date: string;
  image: string;
  link?: string;
  animation: "left" | "center" | "right";
  key?: React.Key;
}

export default function EventCard({
  title1,
  date,
  image,
  link,
  animation,
  key,
}: EventCardProps) {
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
      className="flex flex-col cursor-pointer w-[900px] h-[200px] bg-black/70 backdrop-blur-xl rounded-t-2xl"
      onClick={() => link && window.open(link)}
    >
      <div className="flex flex-row w-full h-full">
        <div className="w-[50%] p-3 h-full  overflow-hidden">
          <Image
            src={image}
            alt={title1}
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover object-center duration-300 rounded-2xl w-full h-full"
          />
        </div>
        <div className="w-[50%] p-3 h-full flex flex-col justify-center items-center">
          <h3
            className="text-white text-xl font-bold flex line-clamp-4"
            dangerouslySetInnerHTML={{ __html: title1 }}
          ></h3>
        </div>

        
      </div>

      <div className="w-full h-full flex flex-row justify-between items-center bg-black/70 rounded-b-2xl p-3">
        <p className="text-white text-sm font-medium">{date}</p>
        <p className="text-black text-sm font-medium">{date}</p>

      </div>


    </motion.div>
  );
}
