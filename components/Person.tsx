import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  name: string;
  image: string;
  role?: string;
  location?: string;
  blurdata?: string | "";
  theme?: "dark" | "light";
  position?: string;
  des1?: string;
  des2?: string;
  link?: string;
  role2?: string;
}

export default function Person({
  name,
  image,
  role,
  role2,
  location,
  blurdata,
  theme,
  position,
  des1,
  des2,
  link,
}: Props) {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className={`w-full h-full flex flex-col justify-center items-center ${
          theme == "dark" ? "text-black" : "text-white"
        }`}
      >
        <div
          className="md:w-32 md:h-32 w-28 h-28 rounded-full bg-black flex cursor-pointer hover:opacity-50 duration-300 select-none"
          onClick={() => setClicked(true)}
        >
          <Image
            src={image}
            width={0}
            height={0}
            {...(blurdata
              ? { blurDataURL: blurdata, placeholder: "blur" }
              : {})}
            alt={""}
            sizes="100% 100%"
            className="w-full h-full rounded-full object-cover select-none"
          ></Image>
        </div>
        <p className="md:text-xl md:h-fit min-h-[30px] h-fit text-lg font-bold text-center leading-4 mt-2">
          {name}
        </p>
        <p className="md:text-base text-sm font-bold opacity-80 text-center">
          {role2 ? (
            <>
              {role} <br /> {role2}
            </>
          ) : (
            role
          )}
        </p>
        {location && (
          <p className="md:text-base text-sm leading-4 h-fit font-bold opacity-80 text-center">
            {location}
          </p>
        )}
      </motion.div>

      <AnimatePresence>
        {clicked && (
          <>
            <motion.div
              initial={{
                opacity: 1,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="w-screen h-screen fixed  inset-0 bg-white/20 z-20 backdrop-blur-sm"
              onClick={() => setClicked(false)}
            ></motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`fixed  md:w-[1000px] w-[80%] max-h-[70vh] sm:max-h-[80vh] h-fit bottom-0 top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 z-30 p-5 rounded-4xl bg-black/90 backdrop-blur-sm text-white flex flex-col shadow-2xl overflow-y-auto`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="md:hidden absolute right-0 size-10 mr-6 mt-1 cursor-pointer hover:scale-105 duration-100 z-20"
                onClick={() => setClicked(false)}
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                  clipRule="evenodd"
                />
              </svg>

              {/* <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="w-full md:h-[300px] h-[150px] bg-black rounded-lg"
                >
                  <Image
                    src={image}
                    width={0}
                    height={0}
                    {...(blurdata
                      ? { blurDataURL: blurdata, placeholder: "blur" }
                      : {})}
                    alt={""}
                    sizes="100% 100%"
                    className={`w-full rounded-lg h-full object-cover grayscale`}
                    style={{ objectPosition: position }}
                  />
                  <p className="text-xl font-bold mt-2 md:leading-none leading-4">
                    {name}
                  </p>
                  <p className="md:text-sm text-xs font-bold mt-1">{role}</p>
                </motion.div> */}
              <div className="w-full h-[300px] md:h-[400px] md:mt-0 mt-10 bg-opacity-20 flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="md:block hidden  size-10 z-10  ml-auto cursor-pointer hover:scale-105 duration-100"
                  onClick={() => setClicked(false)}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {des1 && (
                <div className="flex-1 flex items-center justify-center h-fit absolute top-0 left-0 right-0 bottom-0 m-auto md:p-10 p-5">
                  <p
                    className="text-center text-base md:text-lg font-medium px-4"
                    dangerouslySetInnerHTML={{ __html: des1 }}
                  ></p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
