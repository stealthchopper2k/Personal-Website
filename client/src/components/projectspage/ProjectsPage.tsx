"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Linkshare from "./Linkshare";

function ProjectsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      id={"projectspage"}
      className="h-screen snap-start flex-shrink-0 border-b-2 border-solid border-black text-white"
      ref={ref}
      style={{
        transform: isInView ? "translateY(0)" : "translateX(-200px)",
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        opacity: isInView ? 1 : 0,
      }}
    >
      <div className="flex w-full h-full bg-gray-900 gap-10 items-start justify-start mt-10 p-40">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-8xl tracking-wide mb-10">Projects</h1>
          <Linkshare />
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
