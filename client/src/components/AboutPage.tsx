import React, { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import { ImageContainer } from "./ImageContainer";

export default function AboutPage() {
  const images = ["/lilme.jpeg", "/gradmain.png", "/pic.jpeg"];

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      id={"aboutpage"}
      className="h-screen snap-start flex-shrink-1 border-b-2 border-solid border-black"
      ref={ref}
      style={{
        transform: isInView ? "translateY(0)" : "translateX(-200px)",
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        opacity: isInView ? 1 : 0,
      }}
    >
      <div className="flex flex-row w-full h-full bg-gray-900 gap-10 items-center justify-start mt-10 p-40">
        <div className="flex flex-col items-start justify-start w-2/4">
          <h1 className="text-8xl mb-10">About Me</h1>
          <p className="flex text-2xl flex-wrap">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sollicitudin nisl vitae erat hendrerit, at lacinia diam
            sollicitudin. Morbi imperdiet sapien quis lectus pulvinar, sit amet
            vehicula sapien pellentesque. Sed nec aliquam lectus, nec lobortis
            tortor. Suspendisse aliquet vestibulum orci, vel dignissim tortor
            cursus ut. Praesent lacinia ex sit amet placerat tincidunt. Donec
            viverra, justo id aliquet iaculis, mauris sapien lobortis massa,
            eget rhoncus mi turpis a nisl. Sed commodo rhoncus diam vel
            malesuada.
          </p>
        </div>
        <div className="flex items-center justify-center w-2/4 h-3/4">
          <motion.div className="mt-[-4rem] relative h-full w-full">
            <ImageContainer backgroundImages={images} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
