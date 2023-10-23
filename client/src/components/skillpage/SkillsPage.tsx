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
      className="relative h-screen max-h-screen snap-center snap-always bg-gray-900"
    >
      <div className="flex flex-col items-center justify-center w-full h-full p-16 md:flex-row max-w-full max-h-screen">
        <div className="flex items-center justify-center p-32">
          <ParaDiv />
          <div className="hidden xl:flex items-start justify-start">
            <SpinnyBox />
        </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
