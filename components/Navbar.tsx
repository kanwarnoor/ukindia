"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useNavbar } from "@/lib/navbar-context";

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
  const change = useNavbar();

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

  const [time, setTime] = useState<{ ist: string; gmt: string }>({
    ist: "00:00",
    gmt: "00:00",
  });

  useEffect(() => {
    const updateTime = () => {
      const ist = new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      });
      const gmt = new Date().toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Europe/London",
      });
      setTime({ ist: ist.toString(), gmt: gmt.toString() });
    };

    // Update immediately on mount
    updateTime();

    // Then update every second
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);
  const handleMouseEnter = (label: string) => {
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className=" flex w-full h-fit md:bg-transparent  bg-white text-black items-center px-6 md:px-10 fixed top-0 z-50">
      <Link href="/" className="w-[120px] md:w-[190px] h-auto relative mr-auto">
        <Image
          src="/logo.png"
          alt="logo"
          width={0}
          sizes="100vw"
          height={0}
          className={`w-full  h-full object-contain cursor-pointer transition-all duration-300 ease-in-out ${
            change ? "invert brightness-0" : "invert-0 brightness-100"
          }`}
          priority
        />
      </Link>

      <motion.ul
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={`hidden lg:flex items-center justify-center transistion-all duration-200 gap-6 md:gap-8 text-base md:text-sm  xl:text-base font-medium h-12 px-10 bg-black/50 backdrop-blur-sm rounded-full border border-mix ${
          scroll ? " absolute left-1/2 -translate-x-1/2" : ""
        }`}
      >
        {links.map((link) => (
          <li
            key={link.label}
            className="relative group flex flex-row  h-full "
            onMouseEnter={() => link.sublinks && handleMouseEnter(link.label)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={link.href || "#"}
              className="text-white transition-colors duration-200 flex flex-row justify-center items-center gap-2"
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
                className="absolute left-1/2 text-white transform -translate-x-1/2 top-12 mt-0 bg-black/50 backdrop-blur-xl shadow-lg rounded-md  min-w-[180px] py-2 border border-mix z-10 "
              >
                {link.sublinks.map((sublink) => (
                  <li key={sublink.label}>
                    <Link
                      href={sublink.href || "#"}
                      className="block px-4 py-2 first:border-none border-t-2 transition-colors duration-200 text-sm"
                    >
                      {sublink.label}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </li>
        ))}
      </motion.ul>

      <ul
        className={`hidden lg:flex items-center justify-center transition-all duration-200 gap-6 md:gap-5 text-base md:text-sm  xl:text-base font-medium h-12 px-5 bg-black/50 backdrop-blur-sm rounded-full border border-mix ml-3`}
      >
        <li className="ml-auto flex items-center gap-2 text-white">
          <span>GMT:</span>
          <span>{time.gmt}</span>
        </li>
        <li className="flex items-center gap-2 text-white">
          <span>IST:</span>
          <span>{time.ist}</span>
        </li>
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
            className="size-6  md:size-8 stroke-2"
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
            className="size-6 md:size-8 stroke-2"
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
            className="absolute top-12 pt-10 md:pt-0 md:top-20 h-screen left-0 w-full bg-white shadow-lg px-10 py-2 border border-gray-100 z-10"
          >
            {links.map((link) => {
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
                        className={`size-3 font-bold stroke-4 transition-transform ${
                          expanded ? "rotate-180" : ""
                        }`}
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
