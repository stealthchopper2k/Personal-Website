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
import { BsGit } from "react-icons/bs";

const AnimatedButton = ({ children }) => (
  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
    {children}
  </motion.button>
);
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
      <h1 className="text-white text-8xl tracking-wide mb-10">
        3+ Years Experience In Fullstack Technologies
      </h1>
      <h3 className="text-white text-4xl tracking-wide mb-10">
        Including but not limited to:
      </h3>
      <motion.ul
        className="flex flex-row justifyg-start gap-5"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatedButton>
          <FaReact size={96} color={"#33ccff"} />
          <span className="text-white text-xl tracking-wide">React</span>
        </AnimatedButton>
        <AnimatedButton>
          <SiTypescript size={96} color={"#33ccff"} />
          <span className="text-white text-xl tracking-wide">TypeScript</span>
        </AnimatedButton>
        <AnimatedButton>
          <LiaNode size={96} color="#009933" />
          <span className="text-white text-xl tracking-wide">NodeJS</span>
        </AnimatedButton>
        <AnimatedButton>
          <SiMongodb size={96} color="#009933" />
          <span className="text-white text-xl tracking-wide">MongoDB</span>
        </AnimatedButton>
        <AnimatedButton>
          <SiPostgresql size={96} color="#3333ff" />
          <span className="text-white text-xl tracking-wide">PostgreSQL</span>
        </AnimatedButton>
        <AnimatedButton>
          <BiLogoCPlusPlus size={96} color="#0066cc" />
          <span className="text-white text-xl tracking-wide">C++</span>
        </AnimatedButton>
        <AnimatedButton>
          <BiLogoGraphql size={96} color="#ff00ff" />
          <span className="text-white text-xl tracking-wide">GraphQL</span>
        </AnimatedButton>
        <AnimatedButton>
          <BiLogoGoogleCloud size={96} color={"yellow"} />
          <span className="text-white text-xl tracking-wide">GCP</span>
        </AnimatedButton>
        <AnimatedButton>
          <BsGit size={96} color={"#ff0000"} />
          <span className="text-white text-xl tracking-wide">Git</span>
        </AnimatedButton>
      </motion.ul>
    </motion.div>
  );
}
