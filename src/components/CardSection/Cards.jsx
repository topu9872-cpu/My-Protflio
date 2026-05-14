import React from "react";
import ElectricBorder from "../ui/ElectricBorder";
import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import ScrollFloat from "../ui/ScrollFloat";

const Cards = () => {
  return (
    <section className="w-full py-10">
      {/* Heading */}
      <div className="text-cyan-500 text-center mb-10">
        <ScrollFloat
          animationDuration={0.2}
          stagger={1}
          ease="power3.out"
          scrollStart="top bottom-=10%"
          scrollEnd="bottom center"
        >
          My Projects
        </ScrollFloat>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 w-11/12 mx-auto">
        {projects.map((project) => (
          <ElectricBorder
            key={project.id}
            className="w-full"
            color="#7df9ff"
            speed={1}
            chaos={0.12}
            thickness={2}
            style={{ borderRadius: 18 }}
          >
            <div className="bg-black/20 backdrop-blur-md rounded-2xl overflow-hidden h-full flex flex-col">
              {/* Image */}
              <div className="relative w-full h-52">
                <Image
                  src={project.image}
                  fill
                  alt={project.title}
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-cyan-400">
                  {project.title}
                </h2>

                <p className="text-sm text-gray-300 pt-3 flex-grow">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="pt-5 flex flex-wrap gap-3">
                  <Link
                    href={project.liveLink || "#"}
                    target="_blank"
                    className="btn btn-accent text-white flex-1 min-w-[120px]"
                  >
                    Live Link
                  </Link>

                  <Link
                    href={project.githubLink || "#"}
                    target="_blank"
                    className="btn btn-outline btn-accent flex-1 min-w-[120px]"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </ElectricBorder>
        ))}
      </div>
    </section>
  );
};

export default Cards;