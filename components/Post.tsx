"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface PostProps {
  image: string;
  date: string;
  title: string;
  link: string;
}

export default function Post({ image, date, title, link }: PostProps) {
  return (
    <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      {/* Image Section */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      {/* Text Section */}
      <div className="bg-gray-100 p-6">
        {/* Date */}
        <p className="text-ukindia text-sm font-medium mb-3">{date}</p>

        {/* Title */}
        <h3 className="text-gray-900 text-lg font-bold mb-4 leading-tight underline decoration-ukindia decoration-2 underline-offset-4">
          {title}
        </h3>

        {/* Read More Link */}
        <Link
          href={link}
          className="text-ukindia text-sm font-medium underline hover:text-ukindia/80 transition-colors inline-block"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
