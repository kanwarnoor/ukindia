"use client";

import Lander from "@/components/Lander";
import React, { useEffect, useState, useMemo } from "react";

import axios from "axios";
import InfoCard from "@/components/InfoCard";
import EventCard from "@/components/EventCard";

interface PostProps {
  yoast_head_json: {
    og_image: { url: string }[];
  };
  title: { rendered: string };
  date: string;
  content: { rendered: string };
  slug: string;
  class_list: string[];
}
export default function Page() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const itemsPerPage = 10;

  useEffect(() => {
    axios
      .get(
        "https://bryanp25.sg-host.com/wp-json/wp/v2/event?_embed&per_page=100"
      )
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
        console.log(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // Get paginated posts
  const paginatedPosts = useMemo(() => {
    return posts.slice(0, currentPage * itemsPerPage);
  }, [posts, currentPage]);

  const hasMore = posts.length > currentPage * itemsPerPage;

  // Show load more button when user scrolls down
  useEffect(() => {
    if (!hasMore) {
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      // Show button when user is near bottom (within 300px) or has scrolled past 50% of page
      const distanceFromBottom = documentHeight - scrollPosition;
      const scrollPercentage =
        (window.scrollY / (documentHeight - window.innerHeight)) * 100;

      if ((distanceFromBottom < 300 || scrollPercentage > 50) && hasMore) {
        setShowLoadMore(true);
      } else if (distanceFromBottom >= 300 && scrollPercentage <= 50) {
        setShowLoadMore(false);
      }
    };

    // Check on mount and after content changes
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, paginatedPosts.length]);
  return (
    <>
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
      <section id="more">
        <div className="w-full h-fit flex flex-col gap-10 items-center justify-center py-20">
          {loading && (
            <div className="w-full h-full flex items-center justify-center mx-auto mt-10">
              <div className="w-10 h-10 border-5 border-navy border-t-transparent border-r-transparent border-l-transparent rounded-full animate-spin "></div>
            </div>
          )}
          <div className="w-fit mx-auto mt-10 flex flex-col  gap-10  items-center justify-items-center justify-center">
            {paginatedPosts.map((item: PostProps, index: number) => {
              return (
                <EventCard
                  title1={item.title.rendered}
                  date={item.date}
                  image={
                    item.yoast_head_json.og_image?.[0]?.url || "/home-1.png"
                  }
                  animation="center"
                  key={index}
                />
              );
            })}
          </div>
          {hasMore && (
            <div className="w-full flex items-center justify-center mt-10 mb-10">
              <button
                onClick={() => {
                  setCurrentPage((prev) => prev + 1);
                }}
                className={`px-6 py-3 bg-navy text-white font-bold rounded-full hover:bg-opacity-90 transition-all duration-300 cursor-pointer ${
                  showLoadMore
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-60 translate-y-2 scale-95"
                }`}
              >
                Load More ({posts.length - paginatedPosts.length} remaining)
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
