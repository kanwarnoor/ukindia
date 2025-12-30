"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface landerProps {
  image?: string;
  heading1: string;
  heading2?: string;
  description?: string;
  blurdata?: string;
  css?: string;
  button1hover?: boolean;
  buttonTxt?: string;
  ref?: React.RefObject<HTMLDivElement>;
  buttonLink?: string;
  buttonTxt2?: string;
  buttonLink2?: string;
  button?: boolean;
}

export default function SimpleLander({
  ref,
  image,
  heading1,
  heading2,
  description,
  buttonTxt,
  buttonLink,
  buttonTxt2,
  buttonLink2,
  button = false,
  blurdata,
  css,
  button1hover = true,
}: landerProps) {
  const [loaded, setLoaded] = useState(false);
  // button1hover = button1hover || true;

  return (
    <section
      ref={ref}
      id="home"
      className={`text-white  relative w-full h-screen m-auto text-center flex flex-col justify-center items-center bg-opacity-100 bg-black  ${css} `}
    >
      <motion.div
        initial={{
          scale: 1,
          borderRadius: "1rem",
        }}
        animate={{
          scale: 1,
          borderRadius: "0px",
        }}
        transition={{
          duration: 0.3,
        }}
        className={`relative object-cover inset-0  w-full h-full scale-100 rounded-2xl opacity-100 `}
      >
        {image && (
          <Image
            src={image}
            height={0}
            width={0}
            sizes="100% 100%"
            className={`absolute object-cover inset-0 w-full h-full scale-100 opacity-100 ${
              loaded ? "" : "blur"
            } duration-100`}
            alt=""
            {...(blurdata
              ? { blurDataURL: blurdata, placeholder: "blur" }
              : {})}
            no-select="true"
            onLoad={() => setLoaded(true)}
          ></Image>
        )}
      </motion.div>
      {image && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.7,
          }}
          transition={{
            duration: 2,
          }}
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(circle,white_10%,transparent_50%)]"
        ></motion.div>
      )}

      <div className="absolute z-10">
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="md:text-7xl text-4xl font-bold"
        >
          {heading1}

          {heading2 && <>{heading2}</>}

          {description && (
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              className="md:text-xl text-sm font-bold mt-5 w-full m-auto text-white/70"
            >
              {description}
            </motion.p>
          )}
        </motion.span>
        {button && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
  
            transition={{
              duration: 0.5,
              delay: 1,
            }}
            className="mt-10"
          >
            <a
              href={buttonLink || "#more"}
              className={`md:text-xl border-2 scale-100 font-bold bg-none border-white bg-tiger px-5 py-2 rounded-full   duration-300 ${
                button1hover
                  ? "hover:bg-tiger hover:scale-105 hover:shadow-lg hover:text-white  text-white"
                  : "bg-navy text-white"
              }`}
            >
              {buttonTxt || "Know more"}
            </a>
          </motion.div>
        )}

        <br />
      </div>
      {buttonTxt2 && buttonLink2 && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 1.2,
          }}
          className="absolute bottom-0 left-0 right-0 flex justify-center items-center mb-10"
        >
          <a
            href={buttonLink2}
            className="text-sm  border-2 font-bold text-white bg-none  px-5 py-2 rounded-full hover:bg-white hover:text-black hover:border-black duration-300"
          >
            {buttonTxt2}
          </a>
        </motion.div>
      )}

      <div className="w-full h-full bg-navy/50 absolute top-0 left-0 right-0 bottom-0 0"></div>
    </section>
  );
}
