"use client";

import React, { useEffect } from "react";
import SimpleLander from "@/components/simpleLander";
import { useInView } from "react-intersection-observer";
import { useSetNavbar } from "@/lib/navbar-context";
import Image from "next/image";
import { motion } from "framer-motion";
import LiquidButton from "@/components/LiquidButton";
import Fullscreen from "@/components/Fullscreen";
import Carousel from "@/components/Carousel";
import StatCard from "@/components/StatCard";

export default function Influence() {
  const setNavbar = useSetNavbar();

  const { ref: landerRef, inView: landerInView } = useInView({
    threshold: [0.05, 0.5],
    rootMargin: "0px 0px -89% 0px",
  });
  const { ref: membershipRef, inView: membershipInView } = useInView({
    threshold: [0.05, 0.5],
    rootMargin: "0px 0px -89% 0px",
  });

  useEffect(() => {
    if (landerInView) {
      setNavbar(true);
    } else if (membershipInView) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }, [landerInView, membershipInView, setNavbar]);

  return (
    <>
      <SimpleLander
        ref={landerRef as unknown as React.RefObject<HTMLDivElement>}
        heading1="Influence"
        description="Shaping the Conversations That Shape Policy"
        image="/home-card1.png"
        button={true}
        buttonLink="/influence#more"
      />

      <section id="more">
        <div className="w-full h-fiy py-20">
          <p className=" text-xl font-bold w-[60%] m-auto text-justify">
            We work to create a level playing field where industries can grow
            with confidence, clarity, and fairness. This is achieved through
            sustained advocacy with government and regulatory bodies, and by
            facilitating high-impact engagements including policy dialogues,
            roundtables, forums, receptions, delegations, and direct
            industry–government interactions.
          </p>
        </div>

        <div className="flex flex-row h-fit w-[75%] mx-auto items-center justify-center pb-20">
          <div className="w-1/2 h-fit mx-auto flex items-center justify-center relative">
            <motion.div
              initial={{
                x: 10,
                y: 10,
              }}
              whileInView={{
                x: 0,
                y: 0,
                transition: { duration: 0.5 },
              }}
              whileTap={{
                x: 10,
                y: 10,
                transition: { duration: 0.1 },
              }}
              transition={{ duration: 0.1 }}
              className="w-[400px] h-[350px] z-10 cursor-pointer"
            >
              <Image
                src="/3-eyes/influence1.webp"
                alt="influence"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
            <motion.div
              initial={{
                x: 20,
                y: 20,
              }}
              className="absolute  w-[400px] h-[350px] bg-tiger rounded-xl"
            ></motion.div>
          </div>
          <div className="w-1/2 h-fit mx-auto flex flex-col gap-10 items-center justify-center">
            <h1 className="text-5xl font-bold text-navy">Our Approach</h1>
            <p className="text-lg font-medium px-10 m-auto ">
              Our expert in-house team of account managers, sector specialists,
              and consultants curate and convene a powerful bilateral network
              spanning industry, academia, and government, creating platforms
              where informed dialogue shapes outcomes.
              <br /> <br />
              We work in partnership with multiple levels of government: at the
              National and State levels in India, and the devolved
              administration, city region, and national levels in the UK.
            </p>
            <LiquidButton text="Meet the team" link="/team" />
          </div>
        </div>

        <div className="w-full h-fit flex flex-col justify-center items-center text-center gap-20 py-30 bg-mix/20">
          <h1 className="text-5xl font-bold text-navy flex   w-[40%]">
            Our intelligence network supports your
          </h1>
          <ul className="flex gap-10">
            {[
              "Business Operations",
              "Government Relations",
              "Advocacy Support",
            ].map((item, index) => {
              return (
                <motion.div
                  initial={{
                    y: 10,
                    opacity: 0,
                    scale: 1,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{
                    scale: 1.1,
                    transition: { duration: 0.1 },
                  }}
                  transition={{ duration: 0.1 }}
                  key={index}
                  className="flex flex-col gap-2 items-center justify-center"
                >
                  {index === 0 ? (
                    <div className="px-7 py-7 bg-navy rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-10 text-white "
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                          clipRule="evenodd"
                        />
                        <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                      </svg>
                    </div>
                  ) : index === 1 ? (
                    <div className="px-7 py-7 bg-navy rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-10 text-white "
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25a.75.75 0 0 1 .75.75v.756a49.106 49.106 0 0 1 9.152 1 .75.75 0 0 1-.152 1.485h-1.918l2.474 10.124a.75.75 0 0 1-.375.84A6.723 6.723 0 0 1 18.75 18a6.723 6.723 0 0 1-3.181-.795.75.75 0 0 1-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 0 1-.262 1.453h-8.37a.75.75 0 0 1-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.24H6.332l2.474 10.124a.75.75 0 0 1-.375.84A6.723 6.723 0 0 1 5.25 18a6.723 6.723 0 0 1-3.181-.795.75.75 0 0 1-.375-.84L4.168 6.241H2.25a.75.75 0 0 1-.152-1.485 49.105 49.105 0 0 1 9.152-1V3a.75.75 0 0 1 .75-.75Zm4.878 13.543 1.872-7.662 1.872 7.662h-3.744Zm-9.756 0L5.25 8.131l-1.872 7.662h3.744Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div className="px-7 py-7 bg-navy rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-10 text-white "
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                          clipRule="evenodd"
                        />
                        <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                      </svg>
                    </div>
                  )}
                  <li key={index} className="text-xl font-bold">
                    {item}
                  </li>
                </motion.div>
              );
            })}
          </ul>
          <div className="w-full h-fit flex flex-row sm:flex-row gap-6 sm:gap-10 md:gap-15 justify-center items-center text-center ">
            <StatCard
              animation="left"
              number={105}
              description="UKIBC Members"
            />
            <StatCard
              animation="center"
              number={1200}
              description="Attendees in financial year 2024/25"
            />
            <StatCard
              animation="right"
              number={4}
              description="MoUs with State Governments Signed"
            />
          </div>
        </div>

        <div className="w-full h-fit py-20 px-0">
          <div className="w-full max-w-6xl mx-auto flex flex-col gap-8">
            <h1 className="text-4xl md:text-5xl font-bold text-navy">
              Government Relations
            </h1>

            <p className="text-lg font-medium leading-relaxed">
              We are uniquely connected at every level of both governments. From
              senior ministers and regulators at the national level to key
              officials in state and regional administrations, we ensure your
              priorities are heard in the right rooms, helping create a more
              level playing field for businesses.
            </p>

            <p className="text-lg font-medium leading-relaxed">
              If your business faces a specific policy or regulatory challenge,
              we help you create the right conversation with the government,
              shape your case, and design the tactical pathway to resolve the
              issue.
            </p>

            <p className="text-lg font-semibold leading-relaxed mt-4">
              Our advocacy runs through three core routes:
            </p>

            <div className="flex flex-col gap-6 mt-4">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-navy">
                  1. Ease of Doing Business Working Group
                </h2>
                <p className="text-lg font-medium leading-relaxed">
                  A collective platform where members raise cross-cutting
                  barriers to business, shape reform agendas, and influence
                  policy through structured dialogue with government.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-navy">
                  2. Sector Advocacy Groups
                </h2>
                <p className="text-lg font-medium leading-relaxed mb-2">
                  in priority areas such as:
                </p>
                <ul className="list-disc list-inside ml-4 flex flex-col gap-2">
                  {[
                    "Data, Telecom and Digital",
                    "Food and Drink",
                    "Higher Education",
                    "Financial Services",
                    "Legal Professional Services",
                    "Sports Betting and Online Gaming",
                    "Aerospace and Defence",
                    "Energy",
                    "Space and Satellites",
                  ].map((item, index) => (
                    <li key={index} className="text-lg font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-navy">
                  3. Sustainable Development Alliance (SDA)
                </h2>
                <p className="text-lg font-medium leading-relaxed">
                  an initiative that unites UK enterprises, universities, and
                  stakeholders in India to advance the UN Sustainable
                  Development Goals through collaboration and policy dialogue.
                  It showcases responsible industry action, forges cross-sector
                  partnerships, and aligns business innovation with India&apos;s
                  sustainable growth priorities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Fullscreen
          ref={membershipRef as unknown as React.RefObject<HTMLDivElement>}
          title1="Membership"
          title2="The Right Rooms. The Right People."
          description="Join a trusted ecosystem where business, government, and academia meet with intent. As a member, you gain access to curated B2G and B2B forums that turn dialogue into insight and insight into opportunity. Our platform connects you with decision-makers, leading institutions, and growth-ready enterprises to build relationships that deliver long-term value."
          image="/home-membership.jpg"
          buttonText="JOIN THE NETWORK"
          buttonLink="/membership"
        />
        <div className="w-full h-fit flex justify-center items-center py-20">
          <Carousel
            data={[
              {
                quote:
                  "UKIBC is now at the forefront of their dialogue for sustainability and how energy transition is advancing and the technology benefits that can happen between the two countries.",
                name: "Nandita- Sahgal Tully",
                role: "Group Board Member UKIBC",
                image: "/home/testimonial/nandita.webp",
              },
              {
                quote:
                  "Tata is a long-standing UKIBC member as we value the insights their excellent team provide and the interactions they curate with senior figures from business and government.",
                name: "Tim Jones",
                role: "Executive Director, Tata",
                image: "/home/testimonial/tim.webp",
              },
            ]}
          />
        </div>

        <div className="w-full h-fit py-30 bg-">
          <div className="w-full max-w-6xl mx-auto flex flex-col gap-8 items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy">
              Connect with us:
            </h1>
            <p className="text-lg font-medium leading-relaxed w-[60%] m-auto text-justify">
              To connect with one of our India Experts simply email us or send
              us a message via our contact page. We look forward to connecting
              with you.
            </p>
            <LiquidButton text="Contact Us" link="/contact" />
          </div>
        </div>
      </section>
    </>
  );
}
