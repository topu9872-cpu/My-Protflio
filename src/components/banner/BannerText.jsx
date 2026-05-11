import React from "react";
import Loader from "./TextLoder";
import HireButton from "./BannerbtnHire";
import BannerCVButton from "./BannerCVBtn";

const BannerText = () => {
  return (
    <div className="space-y-3  max-w-2xl text-center md:text-left">
      
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-purple-500">
        Hello,
      </h1>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-cyan-400 leading-tight">
        Mehedi Hasan Topu
      </h1>

      <Loader />

      <p className="text-base sm:text-lg md:text-xl text-cyan-300 leading-relaxed">
        I build modern responsive web apps with smooth UI,
        animations, and scalable backend solutions.
      </p>

      <div className="flex flex-col sm:flex-row cursor-pointer   items-center md:items-start gap-4 pt-3">
        <HireButton />
        <BannerCVButton />
      </div>

    </div>
  );
};

export default BannerText;