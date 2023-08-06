"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SpinnyBox from "./framer/Cube";
import NavMenu from "./framer/navigation/Navbar";
import ParaDiv from "./ParaDiv";

function SkillsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      id={"skillpage"}
      className="h-screen snap-start flex-shrink-0 border-b-2 border-solid border-black"
      ref={ref}
      style={{
        transform: isInView ? "translateY(0)" : "translateX(-200px)",
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        opacity: isInView ? 1 : 0,
      }}
    >
      <NavMenu />
      <div className="flex flex-row w-full h-full bg-gray-900 gap-10 items-center justify-center mt-10 p-40">
        <div className="flex items-center justify-center w-3/4">
          <ParaDiv />
        </div>
        <div className="flex items-start justify-start w-1/4">
          <SpinnyBox />
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
