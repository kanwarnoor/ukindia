import { motion } from "framer-motion";
import { div, text } from "framer-motion/client";
import { defaultOverrides } from "next/dist/server/require-hook";
import React from "react";

interface LiquidButtonProps {
  text: string;
  link: string;
}

export default function LiquidButton({ text, link }: LiquidButtonProps) {
  return (
    <div className="relative flex w-full h-full justify-center items-center ">
      <div className=" left-0 right-0 top-0 bottom-0 bg-black w-fit h-full flex justify-center items-center text-white font-bold px-6 py-3 rounded-full ">
        {text}
      </div>
      <motion.a
        href={link}
        className="absolute left-0 right-0 top-0 bottom-0 flex z-10 mx-auto w-fit justify-center items-center rounded-full text-center  bg-tiger/50 backdrop-blur-sm px-5 py-3 text-md font-bold tracking-wide cursor-pointer text-white transition hover:bg-navy/50  duration-200 border-2 border-mix shadow-lg"
      >
        {text}
      </motion.a>

      
    </div>
  );
}
