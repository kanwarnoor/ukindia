import React from "react";
import LiquidButton from "./LiquidButton";
import Image from "next/image";

export default function Connect({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="w-full h-fit flex flex-row justify-center items-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-8 items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-navy">
          {title}
        </h1>
        <p className="text-lg font-medium leading-relaxed w-[60%] m-auto text-center">
          {description}
        </p>
        <LiquidButton text="Contact Us" link="/contact" />
      </div>
      <div className="w-full h-screen max-w-6xl bg-red-200 mx-auto flex flex-col gap-8 items-center justify-center text-center">
        <Image
          src={image}
          alt="influence"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
