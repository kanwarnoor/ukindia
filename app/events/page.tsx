import Lander from "@/components/Lander";
import React from "react";

export default function page() {
  return (
    <Lander
      title_data={[
        {
          title: "Events",

          des: "Through our membership, UKIBC can connect firms with other business leaders, engage with governments across the UK and India, and project your business as a leader, at the heart of the UK-India trade and investment relationship.",
        },
      ]}
      button={false}
      images={[{ image: "/event.jpg", position: "50%_50%" }]}
      flip={true}
    />
  );
}
