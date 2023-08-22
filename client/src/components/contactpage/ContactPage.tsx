import { useInView } from "framer-motion";
import React, { useRef } from "react";

export default function Contactpage() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      id={"contactpage"}
      className="h-screen snap-start flex-shrink-1 border-b-2 border-solid border-black"
      ref={ref}
      style={{
        transform: isInView ? "translateY(0)" : "translateX(-200px)",
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        opacity: isInView ? 1 : 0,
      }}
    >
      <div className="flex flex-row w-full h-full bg-gray-900 gap-10 items-center justify-start mt-10 p-40">
        <h1>hi</h1>
      </div>
    </div>
  );
}
