import React from "react";
import Orb from "../ui/Orb";
import Image from "next/image";
import BannerText from "./BannerText";
import "animate.css";
const BannerPage = () => {
  return (
    <div className="relative w-full overflow-hidden  h-screen flex items-center justify-center ">
      <div className="absolute inset-0 z-0">
        <Orb hoverIntensity={2} rotateOnHover hue={0} forceHoverState={false} />
      </div>

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl px-6 md:px-10 gap-10 pointer-events-none">
        <div className="flex-1 text-center md:text-left">
          <BannerText />
          <ul className="flex gap-3 mt-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 shadow-lg justify-between max-w-90 ">
            <li className="relative  w-8 h-8">
              <a href="#" className="">
                <Image
                  src="/assrts/icons8-facebook-circled.gif"
                  alt="facebook icon"
                  fill
                  className="rounded-full "
                />
              </a>
            </li>
            <li className="relative w-8 h-8">
              <a href="#">
                <Image
                  src="/assrts/icons8-linkedin.gif"
                  alt="facebook icon"
                  fill
                  className="rounded-full"
                />
              </a>
            </li>
            <li className="relative w-8 h-8 animate__animated animate__bounce">
              <a href="#" className="">
                <Image
                  src="/assrts/pngwing.com.png"
                  alt="facebook icon"
                  fill
                  className="rounded-full "
                />
              </a>
            </li>
            <li className="relative w-8 h-8 animate__animated animate__bounce">
              <a href="#">
                <Image
                  src="/assrts/250px-Glassdoor_logo.svg.png"
                  alt="facebook icon"
                  fill
                  className="rounded-full hover:translate-x-2 transition duration-300 cursor-pointer"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="flex-1 flex  justify-center md:justify-end">
          <Image
            src="/assrts/228337083-removebg-preview.png"
            width={500}
            height={500}
            alt="topu"
            priority
            className="
              object-contain
              w-65
              sm:w-[320px]
              md:w-105
              h-auto
             
              drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]
            "
          />
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
