import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { ImageContainer } from "./ImageContainer";

export default function AboutPage() {
  const images = ["/lilme.jpeg", "/work.jpg", "/gradmain.png"];

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
          <h1 className="text-8xl mb-10">About me</h1>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            // onClick={(e) => {
            //   handleRotate(e);
            // }}
          >
            <p className="flex text-start text-2xl flex-wrap">
              I have been a computer user since birth, and have always been
              tinkering around with the possibilities of digital products.
              During the pandemic I decided to pursue a Software Engineering
              degree in Portsmouth Univerity and graduated with a first-class
              honours degree. Currently, I am actively looking for a job as a
              Fullstack developer, during this process I am working on new
              projects to further excel my skills.
            </p>
            <p className="flex text-start text-2xl mt-6 flex-wrap">
              I spend most of my free time exploring new software concepts,
              browsing forums and organising community based RPG events and
              working out.
            </p>
          </motion.button>
        </div>
        <div className="flex items-center justify-center w-2/4 h-4/4">
          <motion.div className="mt-[-4rem] relative h-3/4 h-3/4">
            <ImageContainer backgroundImages={images} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
