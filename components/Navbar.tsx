"use client"

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const links = [
    {
      label: "What We Do",
      href: null,
      sublinks: [
        {
          label: "Influence",
          href: null,
        },
        {
          label: "Interaction",
          href: null,
        },
        {
          label: "Intelligence",
          href: null,
        },
      ],
    },
    {
      label: "Who We Are",
      sublinks: [
        {
          label: "About Us",
          href: null,
        },
        {
          label: "Meet the Team",
          href: null,
        },
      ],
    },
    {
      label: "Our Resources",
      sublinks: [
        {
          label: "Reports",
          href: null,
        },
        {
          label: "Projects",
          href: null,
        },
        {
          label: "Events",
          href: null,
        },
        {
          label: "News",
        },
      ],
    },
    {
      label: "Membership",
    },
    {
      label: "Contact Us",
    },
  ];
  return (
    <div className="flex w-full h-25 bg-white text-black items-center justify-between px-10">
      <a href="/" className="w-[10%]">
        <Image
          src="/logo.jpg"
          alt="logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-contain cursor-pointer"
        />
      </a>

      <ul className="flex items-center justify-center gap-4 flex-wrap ">
        {links.map((link) => (
          <li
            key={link.label}
            className="flex items-center justify-center gap-4"
          >
            <a href={link.href ?? ""}>{link.label}</a>
            {/* {link.sublinks && (
              <ul className='flex items-center justify-center gap-4'>
                {link.sublinks.map((sublink) => (
                  <li key={sublink.href}>
                    <a href={sublink.href ?? ''}>{sublink.label}</a>
                  </li>
                ))}
              </ul>
            )} */}
          </li>
        ))}
      </ul>
    </div>
  );
}
