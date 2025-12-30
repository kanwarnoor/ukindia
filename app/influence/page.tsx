"use client";

import React, { useEffect } from "react";
import SimpleLander from "@/components/simpleLander";
import { useInView } from "react-intersection-observer";
import { useSetNavbar } from "@/lib/navbar-context";

export default function Influence() {
  const setNavbar = useSetNavbar();

  const { ref: landerRef, inView: landerInView } = useInView({
    threshold: [0.05, 0.5],
    rootMargin: "0px 0px -89% 0px",
  });

  useEffect(() => {
    if (landerInView) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }, [landerInView, setNavbar]);

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
          <p className=" text-xl font-bold w-[75%] m-auto text-justify">
            We work to create a level playing field where industries can grow
            with confidence, clarity, and fairness. This is achieved through
            sustained advocacy with government and regulatory bodies, and by
            facilitating high-impact engagements including policy dialogues,
            roundtables, forums, receptions, delegations, and direct
            industry–government interactions.
          </p>
        </div>

        <div className="flex flex-row w-full h-fit">

          {/* <div className="w-1/2 h-fit">
            <Image src="/influence/influence-1.png" alt="influence" width={500} height={500} />
          </div> */}

        </div>
      </section>
    </>
  );
}
