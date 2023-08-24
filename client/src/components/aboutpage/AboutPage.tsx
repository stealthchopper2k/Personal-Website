import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
import ImageContainer from "./ImageContainer";
import Link from "next/link";
import Image from "next/image";
import Cols from "./Cols";

export default function AboutPage() {
  const images = ["/lilme.jpeg", "/work.jpg"];

  const ref = useRef(null);
  // const isInView = useInView(ref);

  return (
    <div
      id={"aboutpage"}
      className="h-screen snap-start text-white bg-gray-900"
      ref={ref}
      // style={{
      //   transform: isInView ? "translateY(0)" : "translateX(-200px)",
      //   transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      //   opacity: isInView ? 1 : 0,
      // }}
    >
      <div className="flex flex-col w-full md:flex-row  items-center justify-center p-16 md:p-16 xl:p-20 2xl:p-40">
        <div className="w-full md:w-2/4 max-w-full max-h-screen">
          <h1 className="text-6xl whitespace-nowrap md:text-8xl mb-5 md:mb-10">
            About me
          </h1>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <p className="flex text-start text-md md:text-2xl flex-wrap">
              I have been a computer user since birth, and have always been
              tinkering around with the possibilities of digital products.
            </p>
            <p className="flex text-start text-md md:text-2xl mt-6 flex-wrap">
              As a recent graduate, most of my free time is spent exploring new
              software concepts, learning new technologies and building
              projects.
            </p>
            <p className="flex text-start text-md md:text-2xl mt-6 flex-wrap">
              I frequently participate in social events and sports to expand my
              network and maintain a healthy lifestyle.
            </p>
          </motion.button>
          <Cols />
        </div>
        <div className="w-full md:w-2/4 h-4/4 flex justify-center items-center">
          <motion.div className="justify-center relative h-full">
            <ImageContainer backgroundImages={images} changing={false} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
