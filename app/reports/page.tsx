import Lander from "@/components/Lander";
import React from "react";

export default function page() {
  return (
    <Lander
      title_data={[
        {
          title: "Reports",
          des: "UKIBC’s research provides an authoritative analysis of the UK–India economic corridor. Our reports examine critical sectors and trends, equipping businesses and policymakers with the insight needed to navigate trade and investment opportunities with confidence.",
        },
      ]}
      button={false}
      images={[
        { image: "/annual.jpg", position: "50%_50%" },
      ]}
      flip={true}
    />
  );
}
