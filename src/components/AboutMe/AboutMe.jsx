"use client";

import React from "react";
import { motion } from "framer-motion";

// parent container animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// child card animation
const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const AboutMe = () => {
  return (
    <section id="about" className="w-full py-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-2xl">
            Passionate about building modern web experiences with clean UI,
            smooth animations, and scalable backend systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-3xl font-semibold text-cyan-400 mb-4">
              Who I Am
            </h3>

            <p className="leading-relaxed text-lg">
              I'm <span className="font-semibold">Mehedi Hasan Topu</span>, a
              passionate Full Stack Web Developer focused on creating modern,
              responsive, and user-friendly web applications.
            </p>

            <p className="leading-relaxed mt-4">
              I enjoy working with React, Next.js, Tailwind CSS, MongoDB, and Node.js.
            </p>

            <p className="leading-relaxed mt-4">
              My goal is to build real-world impactful projects with clean UI.
            </p>
          </motion.div>

         
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-5"
          >
            {[
              { value: "10+", label: "Projects Completed", color: "text-cyan-400" },
              { value: "1+", label: "Years Learning", color: "text-purple-400" },
              { value: "Full", label: "Stack Developer", color: "text-pink-400" },
              { value: "24/7", label: "Learning Mindset", color: "text-green-400" },
            ].map((itemData, i) => (
              <motion.div
                key={i}
                variants={item}
                className="backdrop-blur-lg card bg-white/10 border border-white/20 rounded-2xl p-6 text-center"
              >
                <h3 className={`text-4xl font-bold ${itemData.color}`}>
                  {itemData.value}
                </h3>
                <p>{itemData.label}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;