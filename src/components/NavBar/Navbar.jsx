"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navicon from "../../../public/assrts/naviccon.png"; // Ensure path is correct
import ThemeBtn from "../ThemeBtn/ThemeBtn";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const sections = ["home", "about", "projects", "contact"];

  useEffect(() => {
    const observerOptions = {
      root: null,
      // This margin tells the browser: "Only trigger when the section is
      // in the middle 40% of the screen."
      rootMargin: "-30% 0px -30% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full backdrop-blur-xl border-b border-white/10 shadow-xl bg-black/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between py-3">
        {/* Logo */}
        <Image
          src={Navicon}
          width={60}
          height={60}
          alt="Nav Logo"
          className="object-cover rounded-full"
        />

        {/* Navigation Links */}
        <div className="hidden md:flex items-center">
          <ul className="flex items-center gap-8">
            {sections.map((item) => (
              <li key={item} className="relative cursor-pointer">
                <a
                  href={`#${item}`}
                  className={`capitalize text-lg font-semibold transition-colors duration-300 ${
                    activeSection === item
                      ? "text-sky-500"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item}
                </a>

                {/* Underline Animation */}
                {activeSection === item && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-sky-500 rounded-full"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4  items-center">
 <button 
  onClick={() => window.open(process.env.NEXT_PUBLIC_WHATSAPP_URL, "_blank")} 
  className="cursor-pointer  bg-purple-500 hover:bg-cyan-400 btn-soft shadow-[0_0_14px_#ffffff] px-6 py-3 rounded-xl text-white font-medium group"
>

  <div className="relative h-[1.5em] overflow-hidden">
    <div className="flex flex-col transition-transform text-lg duration-1200 ease-out-expo group-hover:-translate-y-1/2">
      
      
      <span className="flex h-[1.5em] items-center justify-center">
        Hire Me
      </span>
      
    
      <span className="flex h-[1.5em] items-center justify-center">
        Let's talk
      </span>
      
    </div>
  </div>
</button>

          <ThemeBtn />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
