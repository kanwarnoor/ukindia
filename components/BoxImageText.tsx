import React from "react";
import LiquidButton from "./LiquidButton";
import ImageSlider from "./ImageSlider";

interface BoxImageTextProps {
  title: string;
  description: string | React.ReactNode;
  buttonText: string;
  buttonLink: string;
  className?: string;
  flip?: boolean;
  images: { image: string; position: string }[];
}

export default function BoxImageText({
  title,
  description,
  buttonText,
  buttonLink,
  className,
  flip = false,
  images,
}: BoxImageTextProps) {
  return (
    <div
      className={`flex ${className} ${
        flip ? "flex-row-reverse" : "flex-row"
      } w-[90%] h-[700px] mx-auto  items-center justify-center gap-6`}
    >
      <div className="w-1/2  flex flex-col gap-10 items-center justify-center bg-black/5 rounded-4xl p-15 h-full">
        <div className="flex flex-col gap-10 items-center justify-center">
          <h1 className="text-5xl font-bold text-navy text-center w-[70%] m-auto">
            {title}
          </h1>
          <p
            className="text-lg font-medium px-10 mb-auto flex"
            dangerouslySetInnerHTML={{ __html: description as string }}
          />
          <LiquidButton text={buttonText} link={buttonLink} />
        </div>
      </div>
      <div className="w-1/2 flex items-center bg-black/5 justify-center relative rounded-4xl p-10 h-full min-h-full">
        <ImageSlider rounded={true} animation="up" images={images} />
      </div>
    </div>
  );
}
