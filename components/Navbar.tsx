"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Sublink {
  label: string;
  href?: string | null;
}

interface NavLink {
  label: string;
  href?: string | null;
  sublinks?: Sublink[];
}

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const links: NavLink[] = [
    {
      label: "What We Do",
      href: "#",
      sublinks: [
        {
          label: "Influence",
          href: "#influence",
        },
        {
          label: "Interaction",
          href: "#interaction",
        },
        {
          label: "Intelligence",
          href: "#intelligence",
        },
      ],
    },
    {
      label: "Who We Are",
      href: "#",
      sublinks: [
        {
          label: "About Us",
          href: "#about",
        },
        {
          label: "Meet the Team",
          href: "#team",
        },
      ],
    },
    {
      label: "Our Resources",
      href: "#",
      sublinks: [
        {
          label: "Reports",
          href: "#reports",
        },
        {
          label: "Projects",
          href: "#projects",
        },
        {
          label: "Events",
          href: "#events",
        },
        {
          label: "News",
          href: "#news",
        },
      ],
    },
    {
      label: "Membership",
      href: "#membership",
    },
    {
      label: "Contact Us",
      href: "#contact",
    },
  ];

  const handleMouseEnter = (label: string) => {
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className=" flex w-full h-25 bg-white text-black items-center justify-between px-6 md:px-10 shadow-sm sticky top-0 z-50">
      <Link href="/" className="w-[120px] md:w-[150px] h-16 relative">
        <Image
          src="/logo.jpg"
          alt="logo"
          width={150}
          height={64}
          className="w-full h-full object-contain cursor-pointer"
          priority
        />
      </Link>

      <ul className=" hidden lg:flex items-center justify-center gap-6 md:gap-8 text-base md:text-lg font-semibold h-full pl-10">
        {links.map((link) => (
          <li
            key={link.label}
            className="relative group flex flex-row  h-full"
            onMouseEnter={() => link.sublinks && handleMouseEnter(link.label)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={link.href || "#"}
              className="hover:text-gray-600 transition-colors duration-200 flex flex-row justify-center items-center gap-2"
            >
              {link.label}
              {link.sublinks && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3 font-bold stroke-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </Link>
            {link.sublinks && openDropdown === link.label && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute left-1/2 transform -translate-x-1/2 top-16 mt-0 bg-white shadow-lg rounded-md  min-w-[180px] py-2 border border-gray-100 z-10 "
              >
                {link.sublinks.map((sublink) => (
                  <li key={sublink.label}>
                    <Link
                      href={sublink.href || "#"}
                      className="block px-4 py-2 first:border-none border-t-2 border-gray-100 hover:bg-gray-50 transition-colors duration-200 text-sm"
                    >
                      {sublink.label}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </li>
        ))}
      </ul>

      <div
        className="lg:hidden flex items-center justify-center  cursor-pointer"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        {mobileMenu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 stroke-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 stroke-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </div>

      <AnimatePresence>
        {mobileMenu && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-25 left-0 w-full  bg-white shadow-lg  py-2 border border-gray-100 z-10"
          >
            {links.map((link, idx) => {
              const expanded = openDropdown === link.label;
              return (
                <li key={link.label} className="w-full cursor-pointer">
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-200 text-md flex flex-row justify-between items-center gap-2 font-medium cursor-pointer"
                    onClick={() =>
                      link.sublinks
                        ? setOpenDropdown(expanded ? null : link.label)
                        : setMobileMenu(false)
                    }
                    aria-expanded={!!link.sublinks && expanded}
                  >
                    <span>{link.label}</span>
                    {link.sublinks && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`size-3 font-bold stroke-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    )}
                  </button>
                  {link.sublinks && expanded && (
                    <ul className="w-full bg-gray-50 border-t border-gray-100">
                      {link.sublinks.map((sublink) => (
                        <li key={sublink.label}>
                          <Link
                            className="block px-8 py-2 hover:bg-gray-100 transition-colors duration-200 text-sm"
                            href={sublink.href || "#"}
                            onClick={() => setMobileMenu(false)}
                          >
                            {sublink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
