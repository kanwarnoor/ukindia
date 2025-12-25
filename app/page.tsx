"use client";

import Card from "@/components/Card";
import Lander from "@/components/Lander";
import StatCard from "@/components/StatCard";
import Carousel from "@/components/Carousel";
import Image from "next/image";
import { useState } from "react";
import { WistiaPlayer } from "@wistia/wistia-player-react";

export default function Home() {
  const [video, setVideo] = useState(false);
  return (
    <>
      <Lander
        title={[
          "Building Trust Driving Growth",
          "The Catalyst for Insight, Trust and Impact",
          "Intelligence that Builds Trust Impact that Lasts",
          "Insight that Connects Impact that Counts",
        ]}
        images={[
          { image: "/home-1.png", position: "50%_100%" },
          { image: "/home-2.jpeg", position: "50%_50%" },
          { image: "/home-3.jpeg", position: "10%_10%" },
          { image: "/home-4.jpeg", position: "bottom-right" },
        ]}
      />

      <div className="w-full h-fit flex flex-col gap-2 justify-center items-center bg-gray-100 py-20">
        <h1 className="text-ukindia md:text-5xl text-3xl font-bold text-center flex">
          What we do
        </h1>
        <p className="text-gray-900 text-center md:text-xl text-md font-medium lg:w-full w-[80%]">
          For those seeking practical advice, our team offers the following
          services.
        </p>

        <div className="flex lg:flex-row flex-col gap-5 mt-10 ">
          {" "}
          <Card
            image="/home-card1.png"
            title="Influence"
            description="We help you influence your audience through our strategic insights and expert advice."
            link="/influence"
          />
          <Card
            image="/home-card2.jpeg"
            title="Interaction"
            description="We put you in the room with decision-makers through high-level convening across the UK-India corridor."
            link="/interact"
          />
          <Card
            image="/home-card3.jpg"
            title="Intelligence"
            description="We offer a range of solutions helping you enter, expand and grow in the Indian market"
            link="/intelligence"
          />
        </div>
      </div>

      <div className="w-full h-fit py-20 bg-ukindia/15 flex flex-col justify-center items-center pb-30">
        <div className=" w-full h-fit flex gap-15 justify-center items-center text-center">
          <StatCard
            title="Over"
            valueBefore=""
            valueAfter="+"
            number={825}
            description="businesses and universities have used our services"
            link="/interaction"
          />
          <StatCard
            title="Recruited"
            number={40000}
            valueBefore=""
            valueAfter=""
            description="students from UKIBC Consortium Universities"
            link="/launchpad"
          />
          <StatCard
            title="Revenue"
            valueBefore="£"
            number={600}
            valueAfter=" Billion"
            description="of revenue to the worlds economy"
            link="/meet-out-members"
          />
        </div>

        <div className="w-1/2 h-5 my-20 border-b-2 border-ukindia" />
        {/* who we are */}
        <section className=" flex flex-row w-[70%] justify-center items-center">
          <div className="mx-auto max-w-4xl w-1/2 mr-10">
            {/* Heading */}
            <h2 className="mb-10 text-5xl font-bold text-teal-700">
              Who we are
            </h2>

            {/* List */}
            <ul className="gap-5 flex flex-col text-lg text-gray-900 font-medium">
              {[
                "The UK India Business Council champions partnerships that drive jobs and growth in both countries.",
                "The UK India Business Council champions partnerships that drive jobs and growth in both countries.",
                "We help you realise your potential through forward-looking insights, powerful networks, policy advocacy, and hands-on market-entry support.",
              ].map((item, index) => {
                return (
                  <li key={index} className="flex items-start gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-7  text-teal-700 h-fit "
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <p className="leading-5 w-full">{item}</p>
                  </li>
                );
              })}
            </ul>

            {/* Button */}
            <a
              href="/meet-the-team"
              className="mt-12 rounded-full hover:underline bg-teal-700 px-8 py-3 text-sm font-semibold tracking-wide cursor-pointer text-white transition hover:bg-teal-800 inline-block"
            >
              MEET THE TEAM
            </a>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center gap-5 ml-10">
            <p className="text-gray-900 font-medium text-lg leading-5">
              Here is a look into our purpose, our people, and the impact we
              strive to create.
            </p>

            <div className="w-[600px] h-[337.5px] bg-white rounded-xl relative">
              {!video && (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    onClick={() => setVideo(true)}
                    className="size-30 text-white/80 absolute top-0 left-0 right-0 bottom-0 m-auto shadow-lg cursor-pointer"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <Image
                    src="/home-youtube.jpg"
                    alt="home-card1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    onClick={() => setVideo(true)}
                    className="object-cover w-full h-full rounded-xl object-center cursor-pointer"
                  />
                </>
              )}
              {video && (
                <div className="w-full h-full bg-black absolute top-0 left-0 right-0 bottom-0 rounded-xl">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/u7z_hq0XMfM?si=28hcM-riwb-vMgNp&autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="w-full h-full rounded-xl"
                    allowFullScreen={true}
                  ></iframe>
                </div>
              )}
            </div>
            <div className="w-[600px] h-[337.5px] bg-ukindia rounded-xl absolute translate-x-5 translate-y-13 -z-10" />
          </div>
        </section>
      </div>

      {/* membership */}
      <div className="w-full h-fit flex justify-center items-center bg-ukindia ">
        <div className="w-[80%] py-20 bg-ukindia flex flex-col md:flex-row items-center gap-10 md:gap-0">
          <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center px-4 md:px-12">
            <p className="text-4xl md:text-5xl font-bold text-white mb-2">
              Membership
            </p>
            <p className="text-white text-lg font-bold italic mb-2">
              The Right Rooms. The Right People.
            </p>
            <p className="text-white text-base md:text-lg leading-5 font-medium mb-6">
              Join a trusted ecosystem where business, government, and academia
              meet with intent. As a member, you gain access to curated B2G and
              B2B forums that turn dialogue into insight and insight into
              opportunity. Our platform connects you with decision-makers,
              leading institutions, and growth-ready enterprises to build
              relationships that deliver long-term value.
            </p>
            <a
              href="/membership"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold tracking-wide text-ukindia transition hover:bg-gray-200 hover:underline w-max"
            >
              JOIN THE NETWORK
            </a>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center px-4 md:px-0 mt-8 md:mt-0">
            <Image
              src="/home-membership.jpg"
              alt="membership-image"
              width={600}
              height={337}
              sizes="(max-width: 768px) 90vw, 600px"
              className="rounded-xl object-cover max-w-full h-auto shadow-lg"
              priority
            />
          </div>
        </div>
      </div>

      {/* testimonials */}
      <div className="w-full h-fit flex justify-center items-center py-20">
        <Carousel
          data={[
            {
              quote:
                "We’ve done similar research in other markets. The key is to find a partner who can understand us as a business. We got the sense very early on that UKIBC had that ability. We’re discovering valuable insights into the market.",
              name: "Caroline Newbury",
              role: "Head of International Communications and Business Development, Penguin Random House",
              image: "/home-person1.jpg",
            },
            {
              quote:
                "UKIBC is a fantastic partner. I would like to focus on the convening power of the UKIBC; you can have real conversation with people and members. UKIBC has been a platform for many businesses like Arup to come and talk to each other and to form long term relationships which are the foundations of business collaboration is invaluable. It has been incredibly valuable for me and my firm, in many different ways.",
              name: "Sowmya Parthasarathy",
              role: "Arup",
              image: "/home-person2.jpg",
            },
            {
              quote:
                "UKIBC and their expert staff have been instrumental in ensuring that our expansion in India has had minimal risk, stability and the ingredients for long-term success.",
              name: "Sian Impey",
              role: "Head International Development Office, Swansea University",
              image: "/home-person3.jpg",
            },
          ]}
        />
      </div>

      <div className="w-full h-fit flex justify-center items-center bg-ukindia ">
        <div className="w-[80%] py-20 bg-ukindia flex flex-col md:flex-row items-center gap-10 md:gap-0">
          <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center px-4 md:px-12">
            <p className="text-4xl md:text-5xl font-bold text-white mb-2">
              UK India Business Council
            </p>
            <p className="text-white text-lg font-bold italic mb-2">
              Boosting trade and investment collaboration.
            </p>
            <p className="text-white text-base md:text-lg leading-5 font-medium mb-6">
              An equal UK–India economic partnership built to create jobs and
              fuel shared prosperity—a force for global good.
            </p>
            <a
              href="/membership"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold tracking-wide text-ukindia transition hover:bg-gray-200 hover:underline w-max"
            >
              About UKIBC
            </a>
          </div>

          <div className="w-full md:w-1/2">
            <WistiaPlayer
              mediaId="ouhxny6plv"
              className="w-full h-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
