import React, { useRef } from "react";
import { useInView } from "framer-motion";

export default function AboutPage() {
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
    ></div>
  );
}