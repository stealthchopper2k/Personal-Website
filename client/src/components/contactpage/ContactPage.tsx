import { useInView } from "framer-motion";
import React, { useRef } from "react";
import Form from "./Form";

export default function ContactPage() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      id="contactpage"
      className="h-screen snap-start flex-shrink-1 border-b-2 border-solid border-black"
      ref={ref}
      style={{
        transform: isInView ? "translateY(0)" : "translateX(-200px)",
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        opacity: isInView ? 1 : 0,
      }}
    >
      <div className="flex flex-row w-full h-full bg-gray-900 gap-10 items-center justify-center mt-10 p-24">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl md:text-8xl tracking-wide mb-10">
            Let's Talk!
          </h1>
          <p className="text-lg mb-6">
            Have a question or want to collaborate? Feel free to reach out to
            me.
          </p>
          <Form />
        </div>
      </div>
    </div>
  );
}
