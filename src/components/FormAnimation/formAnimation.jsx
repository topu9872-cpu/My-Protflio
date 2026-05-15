"use client";

import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function ContactAnimation() {
  const [anim, setAnim] = useState(null);

  useEffect(() => {
    fetch("https://assets5.lottiefiles.com/packages/lf20_4kx2q32n.json")
      .then((res) => res.json())
      .then((data) => setAnim(data));
  }, []);

  if (!anim) return <p>Loading...</p>;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-80 md:w-115">
        <Lottie animationData={anim} loop />
      </div>
    </div>
  );
}