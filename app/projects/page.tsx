import Lander from "@/components/Lander";
import React from "react";

export default function page() {
  return (
    <Lander
      title_data={[
        {
          title: "Projects",
          title2: "At UKIBC, our projects drive meaningful impact, helping businesses across sectors capitalize on the dynamic UK-India relationship.",
          des: "Through targeted case studies, we showcase how our expertise supports companies to overcome challenges, navigate new markets, and accelerate growth.",
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
