"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navicon from "@/assrts/naviccon.png";
import ThemeBtn from "../ThemeBtn/ThemeBtn";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        let current = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            current = entry.target.id;
          }
        });

        if (current) {
          setActiveSection(current);
        }
      },
      {
        root: null,
        threshold: 0.6,
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const NavData = (
    <ul className="flex items-center gap-4 sm:gap-6">
      {["Home", "About", "Projects", "Contact"].map((item) => {
        const id = item.toLowerCase();
        const isActive = activeSection === id;

        return (
          <li
            key={item}
            className="relative cursor-pointer text-lg font-semibold transition-colors"
          >
            <a
              href={`#${id}`}
              className={`duration-300 ${
                isActive ? "text-sky-500 hover:text-sky-500" : ""
              }`}
            >
              {item}
            </a>

            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sky-500"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full backdrop-blur-xl border-b border-white/10 shadow-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-4 flex items-center justify-between">
        <Image
          src={Navicon}
          width={100}
          height={100}
          alt="Nav Logo"
          className="object-cover w-16 h-16  rounded-full"
        />

        <div className="hidden md:flex items-center">{NavData}</div>

        <div className="flex gap-3 items-center">
          <button className="cursor-pointer bg-linear-to-b from-sky-500 to-sky-600 shadow-[0px_4px_32px_0_rgba(14,165,233,0.7)] px-6 py-3 rounded-xl border border-white/10 text-white font-semibold group overflow-hidden hover:scale-[1.02] active:scale-95 transition-all duration-300">
            <div className="relative h-6 overflow-hidden">
              <p className="transition-transform duration-700 ease-out-expo group-hover:-translate-y-7">
                Hire Me
              </p>
              <p className="absolute left-0 top-7 transition-all duration-700 ease-out-expo group-hover:top-0">
                Let&apos;s Talk 🚀
              </p>
            </div>
          </button>

          <ThemeBtn />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
