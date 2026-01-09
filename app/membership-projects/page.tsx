"use client";

import Connect from "@/components/Connect";
import Lander from "@/components/Lander";
import React from "react";

export default function page() {
  return (
    <>
      <Lander
        title_data={[
          {
            title: "Membership Projects",
            des: "The UK India Business Council (UKIBC) team is committed to enhancing the trade and investment relationship between the UK and India, fostering a vibrant and equitable economic partnership that creates jobs and prosperity in both nations while serving as a force for global good.",
          },
        ]}
        button={false}
        images={[{ image: "/annual.jpg", position: "50%_50%" }]}
        flip={true}
      />

      <section
        id="more"
        className="w-full h-screen flex flex-col gap-10 items-center justify-center py-20"
      >
        <p>Sorry, we couldn&apos;t find any posts. Please try a different search.</p>
      </section>

      <Connect
        title="Connect with Us"
        description="We're here to help you with your projects. Get in touch with us today."
        image="/connect.webp"
      />
    </>
  );
}
