import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
import ImageContainer from "./ImageContainer";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const images = ["/lilme.jpeg", "/work.jpg", "/gradmain.png"];

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      id={"aboutpage"}
      className="h-screen snap-start border-b-2 border-solid border-black text-white bg-gray-900"
      ref={ref}
      style={{
        transform: isInView ? "translateY(0)" : "translateX(-200px)",
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        opacity: isInView ? 1 : 0,
      }}
    >
      <div className="flex flex-col w-full md:flex-row gap-10 items-center justify-center md:p-40 p-16">
        <div className="w-full md:w-2/4 max-w-full max-h-screen">
          <h1 className="text-6xl whitespace-nowrap md:text-8xl mb-10">
            About me
          </h1>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <p className="flex text-start text-md md:text-2xl flex-wrap">
              I have been a computer user since birth, and have always been
              tinkering around with the possibilities of digital products.
            </p>
            <p className="flex text-start text-md md:text-2xl mt-6 flex-wrap">
              I spend most of my free time exploring new software concepts,
              browsing forums and organising community based RPG events and
              working out.
            </p>
          </motion.button>
          <h1 className="text-4xl md:text-6xl tracking-wide mt-5 mb-5 md:mb-10 md:mt-10 whitespace-nowrap">
            Certifications
          </h1>
          <div className="flex flex-row gap-10">
            <Link
              className="rounded-lg w-20 md:w-32 animate-pulse"
              href="https://www.linkedin.com/posts/leo2k_happy-to-announce-that-i-got-a-first-class-activity-7093219324294746112-SLsp?"
            >
              <Image
                src="/gradmain.png"
                alt="B Cert"
                width="300"
                height="300"
                layout="fixed"
              />
              <h1 className="hidden md:block">Software Degree</h1>
            </Link>
            <Link
              className="rounded-lg w-16 md:w-32 animate-pulse"
              href="https://bcert.me/bc/html/show-badge.html?b=hdffycdr"
            >
              <Image
                src="/badge.png"
                alt="B Cert"
                width="80"
                height="50"
                layout="fixed"
              />
              <h1 className="hidden md:block">Ministry Of Defence</h1>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-2/4 h-4/4 flex justify-center items-center">
          <motion.div className="items-center relative h-full">
            <ImageContainer backgroundImages={images} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
