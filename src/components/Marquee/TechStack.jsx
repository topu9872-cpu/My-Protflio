"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const techStack = [
  {
    name: "HTML5",
    icon: "/assrts/tool iccons/icons8-html-64.png",
  },
  {
    name: "CSS3",
    icon: "/assrts/tool iccons/icons8-css-48.png",
  },
  {
    name: "Tailwind",
    icon: "/assrts/tool iccons/icons8-tailwind-css-96.png",
  },
  {
    name: "JavaScript",
    icon: "/assrts/tool iccons/icons8-javascript-64.png",
  },
  {
    name: "React",
    icon: "/assrts/tool iccons/icons8-react-96.png",
  },
  {
    name: "Next.js",
    icon: "/assrts/tool iccons/icons8-nextjs-96.png",
  },

  {
    name: "Node.js",
    icon: "/assrts/tool iccons/icons8-node-js-96.png",
  },
  {
    name: "MongoDB",
    icon: "/assrts/tool iccons/icons8-mongodb-96.png",
  },
  {
    name: "Express.js",
    icon: "/assrts/tool iccons/icons8-express-js-80.png",
  },
  {
    name: "Firebase",
    icon: "/assrts/tool iccons/icons8-firebase-96.png",
  },
  {
    name: "Git",
    icon: "/assrts/tool iccons/icons8-git-96.png",
  },
  {
    name: "GitHub",
    icon: "/assrts/tool iccons/icons8-github-94.png",
  },

  {
    name: "AI",
    icon: "/assrts/tool iccons/icons8-ai-96.png",
  },

  {
    name: "Chrome",
    icon: "/assrts/tool iccons/icons8-chrome-100.png",
  },
  {
    name: "Netlify",
    icon: "/assrts/tool iccons/icons8-netlify-96.png",
  },
  {
    name: "Vercel",
    icon: "/assrts/tool iccons/Gemini_Generated_Image_bolauebolauebola-removebg-preview (1) (1) (1).png",
  },
  {
    name: "VS Code",
    icon: "/assrts/tool iccons/icons8-vs-code-96.png",
  },
];

const TechStack = () => {
  return (
    <section className="mx-auto container overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl text-cyan-500 md:text-6xl font-bold">
            My Tech Stack
          </h2>

          <p className="opacity-70 text-xl mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable and
            interactive web applications.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-6 w-max"
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
                className="group min-w-45 h-45 card 
                rounded-3xl border border-white/10
                bg-white/5 backdrop-blur-xl
                flex flex-col items-center justify-center
                transition-all duration-300
                hover:border-cyan-400/50
                my-4 mx-2
                hover:shadow-[0_0_30px_10px_rgba(34,211,238,0.3)]
                shadow-[0_0_5px_10px_rgba(34,211,238,0.3)]"
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={70}
                  height={70}
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />

                <h3 className="mt-5 text-lg font-semibold opacity-90 group-hover:text-cyan-500 transition">
                  {tech.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
