import { motion } from "framer-motion";
import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { LiaNode } from "react-icons/lia";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { BiLogoGraphql } from "react-icons/bi";

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
      <h1 className="text-white text-8xl tracking-wide mb-6">
        3+ Years Experience In Fullstack Technologies
      </h1>
      <ul className="flex flex-row justify-start gap-10">
        <li className="">
          <FaReact size={96} />
        </li>
        <li>
          <SiTypescript size={96} />
        </li>
        <li>
          <LiaNode size={96} />
        </li>
        <li>
          <SiMongodb size={96} />
        </li>
        <li>
          <SiPostgresql size={96} />
        </li>
        <li>
          <BiLogoCPlusPlus size={96} />
        </li>
        <li className="">
          <BiLogoGraphql size={96} />
        </li>
      </ul>
    </motion.div>
  );
}
