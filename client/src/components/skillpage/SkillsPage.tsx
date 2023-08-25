"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import SpinnyBox from "../framer/Cube";
import ParaDiv from "./ParaDiv";

function SkillsPage() {
  // const ref = useRef(null);
  // const isInView = useInView(ref);

  return (
    <div
      id={"skillpage"}
      className="relative h-screen snap-center snap-always bg-gray-900"
      // ref={ref}
      // style={{
      //   transform: isInView ? "translateY(0)" : "translateX(-200px)",
      //   transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      //   opacity: isInView ? 1 : 0,
      // }}
    >
      <div className="flex flex-col items-center justify-center w-full h-full md:flex-row max-w-full max-h-screen md:p-16">
        <div className="flex items-center justify-center w-3/4">
          <ParaDiv />
        </div>
        <div className="absolute bottom-20 right-10 md:relative md:flex md:items-start md:justify-start md:w-16">
          <SpinnyBox />
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
