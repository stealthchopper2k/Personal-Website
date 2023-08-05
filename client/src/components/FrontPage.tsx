"use client";
import React, { useRef } from "react";
import Badges from "./MODBADGE";
import { Typewriter } from "react-simple-typewriter";
import { motion, useInView } from "framer-motion";
import NavMenu from "./framer/navigation/MenuAnim";

function FrontPage() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      className="h-screen snap-start flex-shrink-1 border-b-2 border-solid border-black"
      ref={ref}
      style={{
        transform: isInView ? "translateY(0)" : "translateX(-200px)",
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        opacity: isInView ? 1 : 0,
      }}
    >
      <NavMenu />
      <div className="flex flex-col w-full h-full bg-gray-900 items-center justify-center mt-10 flex-shrink-1">
        <div className="text-center">
          <h1 className="text-white text-[10rem]">
            Leonids Jefimovs
            </h1>
            <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Badges />
        </motion.div>
        </div>
        </div>
    </div>
  );
}

export default FrontPage;
