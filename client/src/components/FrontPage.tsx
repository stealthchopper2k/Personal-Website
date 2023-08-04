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
      className="h-screen snap-start flex-shrink-0 border-b-2 border-solid border-black"
      ref={ref}
      style={{
        transform: isInView ? "translateY(0)" : "translateX(-200px)",
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        opacity: isInView ? 1 : 0,
      }}
    >
      <div className="flex flex-col w-full h-full bg-gray-900 items-center justify-center mt-10">
      <NavMenu />
        <div className="text-center left-[-100]">
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <h1 className="text-white text-8xl tracking-wide">
              Leonids Jefimovs
            </h1>
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <div className="p-2 w-7 h-5 text-xl">
                <Typewriter
                  deleteSpeed={50}
                  typeSpeed={100}
                  cursorStyle="_"
                  loop={false}
                  cursorBlinking={true}
                  words={[
                    "First Class Software Graduate!",
                    "Pursuing Full Stack Development",
                    "Lets Talk!",
                  ]}
                />
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className=""
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div className="relative">
              <Badges />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
