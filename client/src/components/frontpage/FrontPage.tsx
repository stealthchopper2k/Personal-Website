"use client";
import React, { useRef } from "react";
import TitleUnderBar from "./TitleUnderBar";
import { motion, useInView } from "framer-motion";

function FrontPage() {
  // const ref = useRef(null);
  // const isInView = useInView(ref);

  return (
    <div
      id={"frontpage"}
      className="h-screen max-h-screen snap-start snap-always bg-gray-900 will-change-auto"
    >
      <div className="flex flex-col w-full h-full items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-5xl whitespace-nowrap sm:text-7xl md:text-[6rem] xl:text-[8rem] 2xl:text-[10rem]">
            Leo Jefimovs
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
            <TitleUnderBar />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
