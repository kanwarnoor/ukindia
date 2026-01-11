import { motion } from "framer-motion";
import { div, text } from "framer-motion/client";
import { defaultOverrides } from "next/dist/server/require-hook";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

interface LiquidButtonProps {
  text: string;
  link: string;
}

export default function LiquidButton({ text, link }: LiquidButtonProps) {
  return (
    <div className="relative  flex w-fit h-fit justify-center items-center ">
      {/* <div className=" left-0 right-0 top-0 bottom-0 bg-black w-fit h-full flex justify-center items-center text-white font-bold px-6 py-3 rounded-full ">
        {text}
      </div> */}
      <div>
        <Link
          href={link}
          className=" left-0 right-0 top-0 bottom-0 flex z-10 w-full justify-center items-center rounded-full text-center  bg-tiger backdrop-blur-sm md:py-3 py-2 md:px-6 px-4 text-sm md:text-md font-bold tracking-wide cursor-pointer text-white transition hover:bg-navy  duration-200 border-2 border-mix shadow-lg"
        >
          {text}
        </Link>
      </div>
    </div>
  );
}
