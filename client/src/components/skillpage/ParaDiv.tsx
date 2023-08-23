import { motion } from "framer-motion";
import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { LiaNode } from "react-icons/lia";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { BiLogoGraphql } from "react-icons/bi";
import { BiLogoGoogleCloud } from "react-icons/bi";
import { FiFigma } from "react-icons/fi";
import { SiWebpack } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";

export const AnimatedButton = ({ children }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="flex flex-col justify-center items-center text-5xl md:text-7xl"
  >
    {children}
  </motion.button>
);

// text-white text-5xl whitespace-nowrap sm:text-7xl md:text-[6rem] xl:text-[8rem] 2xl:text-[10rem]
export default function ParaDiv() {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.9,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <h1 className="text-white text-5xl sm:text-5xl md:text-6xl 2xl:text-8xl tracking-wide mb-10">
        3+ Years Experience In Fullstack Technologies
      </h1>
      <h3 className="text-white text-2xl md:text-4xl tracking-wide mb-10">
        Including but not limited to:
      </h3>
      <motion.ul
        className="flex flex-row flex-wrap justify-start gap-5"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatedButton>
          <SiTypescript color={"#33ccff"} />
          <span className="hidden md:block text-white text-xl tracking-wide">
            TypeScript
          </span>
        </AnimatedButton>
        <AnimatedButton>
          <BiLogoCPlusPlus color="#0066cc" />
          <span className="hidden md:block text-white text-xl tracking-wide">
            C++
          </span>
        </AnimatedButton>
        <AnimatedButton>
          <FaReact color={"#33ccff"} />
          <span className="hidden md:block text-white text-xl tracking-wide">
            React
          </span>
        </AnimatedButton>

        <AnimatedButton>
          <LiaNode color="#009933" />
          <span className="hidden md:block text-white text-xl tracking-wide">
            NodeJS
          </span>
        </AnimatedButton>
        <AnimatedButton>
          <SiMongodb color="#009933" />
          <span className="hidden md:block text-white text-xl tracking-wide">
            MongoDB
          </span>
        </AnimatedButton>
        <AnimatedButton>
          <SiPostgresql color="#3333ff" />
          <span className="hidden md:block text-white text-xl tracking-wide">
            PostgreSQL
          </span>
        </AnimatedButton>
        <AnimatedButton>
          <BiLogoGraphql color="#ff00ff" />
          <span className="hidden md:block text-white text-xl tracking-wide">
            GraphQL
          </span>
        </AnimatedButton>
        <AnimatedButton>
          <BiLogoGoogleCloud color={"yellow"} />
          <span className="hidden md:block text-white text-xl tracking-wide">
            GCP
          </span>
        </AnimatedButton>
        <AnimatedButton>
          <BsGit color={"#ff0000"} />
          <span className="hidden md:block text-white text-xl tracking-wide">
            Git
          </span>
        </AnimatedButton>
        <AnimatedButton>
          <SiWebpack color={"#ADD8E6"} />
          <span className="hidden md:block text-white text-xl tracking-wide">
            Webpack
          </span>
        </AnimatedButton>
        <AnimatedButton>
          <FiFigma color={"#ff0066"} />
          <span className="hidden md:block text-white text-xl tracking-wide">
            Figma
          </span>
        </AnimatedButton>
        <AnimatedButton>
          <SiTailwindcss color={"#33ccff"} />
          <span className="hidden md:block text-white text-xl tracking-wide">
            Tailwind CSS
          </span>
        </AnimatedButton>
      </motion.ul>
    </motion.div>
  );
}
