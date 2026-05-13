import React from "react";
import ElectricBorder from "../ui/ElectricBorder";
import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import ScrollFloat from "../ui/ScrollFloat";
const Cards = async () => {
  console.log(projects);

  return (
    <div>
         <div className="text-cyan-500">
          <ScrollFloat 
            animationDuration={0.2}
            stagger={1}
            ease='power3.out'
            scrollStart='top bottom-=10%'
            scrollEnd='bottom center'
          >
           My Projects
          </ScrollFloat>
         </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto w-11/12">


      {projects.map((project) => (
        <ElectricBorder
          key={project.id}
          className="w-62"
          color="#7df9ff"
          speed={1}
          chaos={0.12}
          thickness={2}
          style={{ borderRadius: 10 }}

        >

          
          <div style={{ margin: "6px 0 0", opacity: 0.8 }}>
            <div className="px-5 pt-3  rounded-xl h-90 w-60">
             
                <Image
                  src={project?.image}
                  width={260}
                  height={160}
                  alt="image"
                  className="h-30 rounded-xl"
                />
             
              <div className=" pt-5 w-full">
                <h2 className="card-title">{project.title}</h2>
                <p className="">
                 {project.description}
                </p>
                <div className="pt-4 flex justify-start gap-2">
                 <button className="btn btn-accent text-white "><Link href="">Live Link</Link></button>
                  <button className="btn btn-accent text-white"><Link href="">GitHub Link</Link></button>
                </div>
              </div>
            </div>
          </div>
        </ElectricBorder>
      ))}
    </div>
    </div>
  );
};

export default Cards;
