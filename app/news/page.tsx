import Lander from "@/components/Lander";
import React from "react";

export default function page() {
  return (
    <Lander
      title_data={[
        {
          title: "News And Advice",
          title2:
            "Discover the latest from UKIBC experts, including recent news, expert blogs, key announcements, and updates on government engagements.",

          des: "Access insights and resources to stay informed on UK-India business dynamics. The UK India Business Council (UKIBC) strengthens UK-India trade by offering insights, support, and advocacy. With resources on market entry, policy updates, and expert guidance, UKIBC empowers businesses to thrive in both markets as a trusted partner for growth.",
        },
      ]}
      button={false}
      images={[{ image: "/event.jpg", position: "50%_50%" }]}
      flip={true}
    />
  );
}
