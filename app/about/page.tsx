"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSetNavbar } from "@/lib/navbar-context";
import Image from "next/image";
import { motion } from "framer-motion";
import LiquidButton from "@/components/LiquidButton";
import Fullscreen from "@/components/Fullscreen";
import Carousel from "@/components/Carousel";
import StatCard from "@/components/StatCard";
import Lander from "@/components/Lander";
import BoxImageText from "@/components/BoxImageText";
import ImageSlider from "@/components/ImageSlider";
import axios from "axios";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import InfoCard from "@/components/InfoCard";
import Connect from "@/components/Connect";

export default function About() {
  const setNavbar = useSetNavbar();

  const { ref: intelligenceRef, inView: intelligenceInView } = useInView({
    threshold: [0.05, 0.5],
    rootMargin: "0px 0px -89% 0px",
  });
  const { ref: landerRef, inView: landerInView } = useInView({
    threshold: [0.05, 0.5],
    rootMargin: "0px 0px -89% 0px",
  });
  const { ref: membershipRef, inView: membershipInView } = useInView({
    threshold: [0.05, 0.5],
    rootMargin: "0px 0px -89% 0px",
  });

  const sectors = [
    {
      name: "Agritech",
      image: "/3-eyes/interaction/agritech.svg",
    },
    {
      name: "Automotive",
      image: "/3-eyes/interaction/automotive.svg",
    },
    {
      name: "Chemicals",
      image: "/3-eyes/interaction/chemicals.svg",
    },
    {
      name: "Defence",
      image: "/3-eyes/interaction/defence.svg",
    },
    {
      name: "Digital Economy",
      image: "/3-eyes/interaction/money.svg",
    },
    {
      name: "Financial and Professional Services",
      image: "/3-eyes/interaction/financial.svg",
    },
    {
      name: "Food & Drink",
      image: "/3-eyes/interaction/food-drink.svg",
    },
    {
      name: "Healthcare",
      image: "/3-eyes/interaction/healthcare.svg",
    },
    {
      name: "Infrastructure",
      image: "/3-eyes/interaction/infrastructure.svg",
    },
    {
      name: "Legal Services",
      image: "/3-eyes/interaction/legal.svg",
    },
    {
      name: "Life Sciences",
      image: "/3-eyes/interaction/life-science.svg",
    },
    {
      name: "Music",
      image: "/3-eyes/interaction/music.svg",
    },
    {
      name: "Oil & Gas",
      image: "/3-eyes/interaction/oil-gass.svg",
    },
    {
      name: "Renewable Energy",
      image: "/3-eyes/interaction/renewable-energy.svg",
    },
    {
      name: "Leisure & Tourism",
      image: "/3-eyes/interaction/tourism.svg",
    },
    {
      name: "Smart Cities",
      image: "/3-eyes/interaction/smart-cities.svg",
    },
    {
      name: "Sports",
      image: "/3-eyes/interaction/sports.svg",
    },
    {
      name: "Trade Bodies and Government Agencies",
      image: "/3-eyes/interaction/trade.svg",
    },
  ];

  useEffect(() => {
    if (intelligenceInView) {
      setNavbar(true);
    } else if (landerInView) {
      setNavbar(false);
    } else if (membershipInView) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }, [intelligenceInView, membershipInView, landerInView, setNavbar]);

  // const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://bryanp25.sg-host.com/wp-json/wp/v2/event?_embed")
      .then((res) => {
        // setEvents(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <>
      <Lander
        ref={landerRef as unknown as React.RefObject<HTMLDivElement>}
        title_data={[
          {
            title: "About us",
            des: "The UK India Business Council passionately believes that the UK-India partnership creates jobs and growth in both countries, and that UK and Indian businesses have ideas, technology, services, and products that can succeed in India and the UK, respectively. Through our last-mile insights, networks, future-focused policy advocacy, and market-entry services, we support businesses in achieving this success.",
          },
        ]}
        flip={true}
        currency={false}
        images={[
          { image: "/home/lander/4.webp", position: "bottom-right" },
          { image: "/home/lander/1.webp", position: "50%_100%" },
          { image: "/home/lander/2.webp", position: "50%_50%" },
          { image: "/home/lander/3.webp", position: "10%_10%" },
        ]}
      />
      {/* <SimpleLander
        ref={landerRef as unknown as React.RefObject<HTMLDivElement>}
        heading1="Influence"
        description="Shaping the Conversations That Shape Policy"
        image="/home-card1.png"
        button={true}
        buttonLink="/influence#more"
      /> */}

      <section id="more">
        {/* <div className="w-full h-fiy py-20">
          <p className=" text-xl font-bold w-[60%] m-auto text-justify">
            We work to create a level playing field where industries can grow
            with confidence, clarity, and fairness. This is achieved through
            sustained advocacy with government and regulatory bodies, and by
            facilitating high-impact engagements including policy dialogues,
            roundtables, forums, receptions, delegations, and direct
            industry–government interactions.
          </p>
        </div> */}

        <div className="flex gap-5 flex-row my-20 items-center justify-center">
          <InfoCard
            title1={"Interaction"}
            des={"Why: Putting you in the room with decision-makers. "}
            des2={
              "How: We’re a bilateral not-for-profit with unique access and a powerful network. We convene political and business leaders in both countries."
            }
            textPosition={"left"}
            extraLarge={true}
            image={"/home/eyes/interact-4.png"}
            animation={"left"}
            link={"/interaction"}
          />
          <InfoCard
            title1={"Intelligence"}
            des={"Why: Helping you understand what’s important and why."}
            des2={
              "How: In the UK-India economic corridor, we are the leader in original data, actionable knowledge, in-market insights and advisory."
            }
            extraLarge={true}
            textPosition={"left"}
            image={"/home/eyes/intel-1.png"}
            animation={"center"}
            link={"/intelligence"}
          />
          <InfoCard
            title1={"Intelligence"}
            des={"Why: Enabling better business outcomes."}
            des2={
              "How: We advocate for sector-specific as well as cross-cutting policy reforms. We inform Government decision-making."
            }
            extraLarge={true}
            image={"/home/eyes/influence-2.png"}
            textPosition={"left"}
            animation={"right"}
            link={"/influence"}
          />
        </div>

        <div className="flex gap-5 flex-col my-20 text-navy ">
          <h1 className="text-3xl font-bold text-center w-[70%] mx-auto mb-5">
            We provide insight to help businesses influence policy, interact
            with the right stakeholders and turn intelligence into growth.
          </h1>
          <BoxImageText
            description="Our first-hand experience of entering and growing businesses make us uniquely qualified. We want to share our experiences to help others achieve success whether they are well-established in India or in the early stages of their engagement. <br/><br/> Working with the both Governments and other influential and connected partners, we ensure business interests are conveyed. The UK India Business Council seek to influence decisions that will make it easier for UK businesses to operate in India and vice versa."
            images={[
              { image: "/corpo1.webp", position: "center" },
              { image: "/comp.webp", position: "center" },
              { image: "/meet.webp", position: "center" },
            ]}
            flip={false}
          />

          <BoxImageText
            title="Our Membership network is at the heart of our support"
            description="The UK India Business Council (UKIBC) team is committed to enhancing the trade and investment relationship between the UK and India, fostering a level-playing field that creates jobs and prosperity in both nations while serving as a force for global good."
            buttonText="Meet the team"
            buttonLink="/team"
            images={[
              { image: "/home/who-we-are/3.webp", position: "center" },
              { image: "/meet2.webp", position: "center" },
              { image: "/emptymeet.webp", position: "center" },
            ]}
            flip={true}
          />
        </div>

        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(1 45 107)"
          gradientBackgroundEnd="rgb(0 11 25)"
          firstColor="3, 107, 252"
          secondColor="2, 87, 207"
          thirdColor="1, 30, 71"
          fourthColor="139, 187, 254"
          fifthColor="139, 187, 254"
          interactive={false}
          containerClassName="w-full min-h-screen md:h-screen h-[150vh]  flex  justify-center items-center bg-navy relative"
        >
          <div
            className=" z-10 absolute top-0 left-0 mx-auto w-full h-screen flex flex-col justify-center items-center text-center gap-20 py-30 "
            ref={intelligenceRef as unknown as React.RefObject<HTMLDivElement>}
          >
            <div className="flex flex-col gap-5 items-center justify-center">
              <h1 className="text-5xl font-bold text-white flex ">
                For those seeking practical advice,
              </h1>
              <p className="text-white text-base w-[70%] mx-auto">
                We provide insight to help businesses influence policy, interact
                with the right stakeholders and turn intelligence into growth.
              </p>
            </div>

            {/* <LiquidButton text="Learn more" link="/about" /> */}
            {/* <ul className="flex gap-10">
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
                      <div className="px-7 py-7 bg-tiger rounded-full flex items-center justify-center">
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
                      <div className="px-7 py-7 bg-tiger rounded-full flex items-center justify-center">
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
                      <div className="px-7 py-7 bg-tiger rounded-full flex items-center justify-center">
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
                    <li key={index} className="text-xl font-bold text-white">
                      {item}
                    </li>
                  </motion.div>
                );
              })}
            </ul> */}
            <div className="w-full  h-fit flex flex-row sm:flex-row gap-6 sm:gap-10 md:gap-15 justify-center text-center ">
              <div className="flex flex-col gap-2 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-10 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-white text-xl font-bold">Market Advisory</p>
                <LiquidButton text="Learn more" link="/intelligence" />
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-10 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                  />
                </svg>

                <p className="text-white text-xl font-bold">
                  Higher Education Advisory
                </p>
                <LiquidButton text="Learn more" link="/interaction" />
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-10 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                  />
                </svg>

                <p className="text-white text-xl font-bold">
                  Government Advisory
                </p>
                <LiquidButton text="Learn more" link="/influence" />
              </div>
              {/* <StatCard
                animation="left"
                number={825}
                valueAfter="+"
                title="Over"
                description="Businesses and universities have used our services"
                color="white"
              />
              <StatCard
                animation="center"
                number={40000}
                title="UKIBC recruited"
                description="students from UKIBC Consortium Universities"
                color="white"
              />
              <StatCard
                animation="right"
                title="Our Members Contribute"
                valueBefore="£"
                number={600}
                valueAfter=" Billion"
                description="of revenue to the worlds economy"
                color="white"
              /> */}
            </div>
          </div>
        </BackgroundGradientAnimation>

        <div className=" hidden w-full h-fit py-20 px-0 bg-transparent">
          <div className="w-full max-w-6xl mx-auto flex flex-col gap-12">
            {/* Top Row: Image (moving images) + Text */}
            <div className=" w-full flex flex-col md:flex-row gap-6 bg-mix/10 p-4 rounded-4xl justify-center items-center ">
              {/* Left: Image or video placeholder */}
              <div className="flex-1 flex items-stretch rounded-2xl overflow-hidden min-h-[150px] max-h-[230px] relative bg-blue-200">
                {/* Replace the div below with an <animate>d image carousel or video as needed */}
                <ImageSlider
                  images={[
                    { image: "/home/eyes/influence-1.png", position: "center" },
                    { image: "/home/eyes/influence-2.png", position: "center" },
                    { image: "/home/eyes/influence-3.png", position: "center" },
                  ]}
                />
              </div>
              {/* Right: Heading and Paragraph */}
              <div className="flex-1 flex flex-col justify-center py-4 px-4 md:px-8 gap-2">
                <h1 className="text-3xl md:text-4xl font-bold text-navy mb-2">
                  Government Relations
                </h1>
                <p className="text-base md:text-lg font-medium text-gray-700 leading-relaxed">
                  We are uniquely connected at every level of both governments.
                  From key officials in state and regional administrations, we
                  ensure your priorities are heard in the right rooms, helping
                  create a more level playing field for businesses.
                </p>
              </div>
            </div>

            {/* Advocacy Intro Paragraph */}
            <div className="w-full flex flex-col gap-2 text-gray-700">
              <p className="text-base md:text-lg font-medium leading-relaxed">
                If your business faces a specific policy or regulatory
                challenge, we help you create the right conversation with the
                government, shape your case, and design the tactical pathway to
                resolve the issue.
              </p>
              <p className="text-base md:text-lg font-semibold leading-relaxed mt-2">
                Our advocacy runs through three core routes:
              </p>
            </div>

            {/* Three core routes in cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {/* Card 1 */}
              <div className="flex flex-col gap-2 bg-mix/10 rounded-2xl shadow-md h-full p-6">
                <h2 className="text-lg md:text-xl font-bold text-navy">
                  1. Ease of Doing Business Working Group
                </h2>
                <p className="text-base md:text-base font-medium leading-relaxed text-gray-800 mt-1">
                  A collective platform where members raise cross-cutting
                  barriers to business, shape reform agendas, and influence
                  policy through structured dialogue with government.
                </p>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col gap-2 bg-mix/10 rounded-2xl shadow-md h-full p-6">
                <h2 className="text-lg md:text-xl font-bold text-navy">
                  2. Sector Advocacy Groups
                </h2>
                <p className="text-base md:text-base font-medium leading-relaxed mb-2 text-gray-800">
                  In priority areas such as:
                </p>
                <ul className="list-disc list-inside ml-2 flex flex-col gap-1 text-base text-gray-700">
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
                    <li key={index} className="font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Card 3 */}
              <div className="flex flex-col gap-2 bg-mix/10 rounded-2xl shadow-md h-full p-6">
                <h2 className="text-lg md:text-xl font-bold text-navy">
                  3. Sustainable Development Alliance (SDA)
                </h2>
                <p className="text-base md:text-base font-medium leading-relaxed text-gray-800 mt-1">
                  An initiative that unites UK enterprises, universities, and
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

        {/* <div className="w-full h-fit flex justify-center items-center py-20 bg-black/5">
          <Carousel
            data={[
              {
                quote:
                  "UKIBC provided us with excellent advice and support at every stage in the recruitment. Our membership enables us to tap into a network of universities and other UK-focused organisations. This is useful for our wider objectives of engagement with Indian universities and businesses with whom we seek research collaboration and employment opportunities for our graduates.",
                name: "Richard Cotton",
                role: "Director of Student Recruitment and Outreach, University of Manchester",
                image: "/home/testimonial/richard.jpg",
              },
              {
                quote:
                  "I have nothing but praise for Gunjan’s team. They have been very proactive about delivering what they said they would. I’d highly recommend them. What they’re delivering for us is exactly what we asked them to deliver. Their reports are bespoke to us and delivered what they said they would.",
                name: "Cameron Hunt",
                role: "Anglo American",
                image: "/home/testimonial/hunt.png",
              },
              {
                quote:
                  "The UKIBC set up our subsidiary. They have been managing our India company compliance over the past five years and providing market advice when needed. Our team has tripled as we build valuable business ties.",
                name: "Jonathan Mahoney",
                role: "Biocomposites",
                image: "/person.jpg",
              },
            ]}
          />
        </div> */}
        {/* <div className="w-full h-fit flex flex-row justify-center items-center gap-10 pb-20 bg-black/5">
          <InfoCard
            animation="left"
            title1="Reports"
            des="Our intelligence comes to life through rigorous reports grounded in market research and policy insight"
            image="/3-eyes/intel/intel1.jpeg"
            buttonText="Reports"
            idiot={true}
            extraLarge={true}
            link="/reports"
          />
          <InfoCard
            animation="right"
            title1="Case Studies"
            des="See how our members have successfully entered, expanded, and scaled across the UK–India corridor, offering practical lessons, strategic clarity, and proven pathways for informed decision-making."
            image="/3-eyes/intel/intel1.jpeg"
            buttonText="Case Studies"
            idiot={true}
            extraLarge={true}
            link="/business-solution-projects"
          />
        </div> */}

        {/* <Fullscreen
          ref={membershipRef as unknown as React.RefObject<HTMLDivElement>}
          title1="Membership"
          title2="The Right Rooms. The Right People."
          description="Join a trusted ecosystem where business, government, and academia meet with intent. As a member, you gain access to curated B2G and B2B forums that turn dialogue into insight and insight into opportunity. Our platform connects you with decision-makers, leading institutions, and growth-ready enterprises to build relationships that deliver long-term value."
          image="/home-membership.jpg"
          buttonText="JOIN THE NETWORK"
          buttonLink="/membership"
        /> */}

        <Connect
          title="Connect with us:"
          description="To connect with one of our India Experts simply email us or send us a message via our contact page. We look forward to connecting with you."
          image="/contactHome.png"
        />
      </section>
    </>
  );
}
