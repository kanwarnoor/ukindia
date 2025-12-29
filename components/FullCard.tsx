"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import ImageSlider from "@/components/ImageSlider";

interface InfoCardProps {
  title1: string;
  des?: string;
  description?: string;
  image: string;
  date?: string;
  link?: string;
  large?: boolean | false;
  idiot?: boolean | false;
  animation: "left" | "center" | "right";
  images: { image: string; position: string }[];
}

export default function InfoCard({
  title1,
  date,
  images,
  des,
  description,
  animation,
  large,
  idiot,
  link,
}: InfoCardProps) {
  const [clicked, setClicked] = useState(false);

  const betterDate = date
    ? new Date(date)
        .toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
        .replace(/ /g, " ")
    : "";
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
      // onClick={() => setClicked1((clicked1) => !clicked1)}
      className="flex flex-col cursor-pointer w-full h-[500px] bg-black/50 backdrop-blur-xl "
    >
      {!clicked && (
        <div
          className="flex flex-col bg-black/50 backdrop-blur-xl h-full"
          onClick={() =>
            description
              ? setClicked((clicked) => !clicked)
              : window.open(link, "_ blank")
          }
        >
          <div className={`relative w-full duration-300  h-full`}>
            <ImageSlider
              images={images}
              hasMultipleImages={true}
              currentImage={0}
            />

            <div
              className={`absolute bottom-0 left-0 w-full ${
                large ? "h-1/2" : "h-1/2"
              } pointer-events-none 
               backdrop-blur-xl
               ${
                 large
                   ? "[mask-image:linear-gradient(to_top,black_70%,transparent)]"
                   : "[mask-image:linear-gradient(to_top,black_50%,transparent)]"
               }
               [Webkit-mask-image:linear-gradient(to_top,black_50%,transparent)]`}
            />
          </div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className={` w-full ${
              large ? "h-1/2" : "h-1/3"
            } transition px-5 absolute flex flex-col m-auto justify-center items-center  left-0 right-0 bottom-0  `}
          >
            {large ? (
              <p className="text-white font-bold md:text-4xl leading-tight text-xl text-center line-clamp-3 overflow-hidden">
                {title1}
              </p>
            ) : (
              <p className="text-white font-semibold md:text-md leading-tight text-lg text-center line-clamp-3 overflow-hidden">
                {title1}
              </p>
            )}

            <p
              className={`text-center w-[80%] md:w-1/2 text-white text-xs opacity-80 font-semibold mt-1`}
            >
              {date ? betterDate : des}
            </p>

            {idiot && (
              <a
                href={link}
                target="_blank"
                className="px-5 m-3 py-1 border-2  bg-white text-black border-white font-bold  hover:scale-105 duration-200 rounded-full"
              >
                Read more
              </a>
            )}
          </motion.div>
        </div>
      )}

      {/* {clicked && description && (
        <>
          <div
            className={`absolute w-full h-full duration-300  md:h-full -z-10`}
          >
            <Image
              src={image}
              width={0}
              height={0}
              sizes="100% 100%"
              alt="Saturn Roman"
              className={`w-full h-full object-cover object-center duration-300 `}
            ></Image>
          </div>
          <div
            className="absolute bottom-0 left-0 w-full h-full pointer-events-none 
               backdrop-blur-xl
               [mask-image:linear-gradient(to_top,black_100%,transparent)]
               [Webkit-mask-image:linear-gradient(to_top,black_100%,transparent)] -z-10"
          />
          <div className="flex justify-end p-5 cursor-default">
            <motion.svg
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="size-9 cursor-pointer hover:scale-110 duration-150"
              onClick={() => setClicked((clicked) => !clicked)}
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clip-rule="evenodd"
              />
            </motion.svg>
          </div>

          <div className="relative h-full md:p-10 px-10 md:text-base text-white text-center cursor-default">
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="md:text-base text-sm"
            >
              {description}
            </motion.p>

            {link && (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="absolute bottom-0 flex justify-center m-auto left-0 right-0 pb-10 "
              >
                <a
                  href={link}
                  target="_blank"
                  className="px-5 py-2 border-2 border-white  hover:scale-110 duration-200"
                >
                  Read more
                </a>
              </motion.div>
            )}
          </div>
        </>
      )} */}
    </motion.div>
  );
}
