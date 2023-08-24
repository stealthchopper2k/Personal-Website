"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import SpinnyBox from "../framer/Cube";
import ParaDiv from "./ParaDiv";

function SkillsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      id={"skillpage"}
      className="h-screen snap-start border-b-2 border-solid border-black"
      ref={ref}
      style={{
        transform: isInView ? "translateY(0)" : "translateX(-200px)",
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        opacity: isInView ? 1 : 0,
      }}
    >
      <div className="flex flex-col items-center justify-center md:flex-row w-full h-full bg-gray-900 gap-10 mt-10 p-16 md:p-16">
        <div className="flex items-start justify-start w-3/4">
          <ParaDiv />
        </div>
        <div className="absolute bottom-10 right-10 md:relative md:flex md:items-start md:justify-start md:w-16">
          <SpinnyBox />
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
