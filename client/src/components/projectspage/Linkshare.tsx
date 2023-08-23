import React from "react";
import { AnimatedButton } from "../skillpage/ParaDiv";
import { FaReact } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { LiaNode } from "react-icons/lia";
import { BiLogoGoogleCloud } from "react-icons/bi";
import { SiWebpack } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";

export default function Linkshare() {
  return (
    <>
      <AnimatedButton>
        <FaReact color={"#33ccff"} />
        <span className="hidden md:block text-white text-xl tracking-wide">
          React
        </span>
      </AnimatedButton>
      <AnimatedButton>
        <BiLogoJavascript color={"#FDDA0D"} />
        <span className="hidden md:block text-white text-xl tracking-wide">
          JavaScript
        </span>
      </AnimatedButton>
      <AnimatedButton>
        <LiaNode color="#009933" />
        <span className="hidden md:block text-white text-xl tracking-wide">
          NodeJS
        </span>
      </AnimatedButton>
      <AnimatedButton>
        <SiFirebase color="#FFA500" />
        <span className="hidden md:block text-white text-xl tracking-wide">
          Firebase
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
        <SiTailwindcss color={"#33ccff"} />
        <span className="hidden md:block text-white text-xl tracking-wide">
          Tailwind
        </span>
      </AnimatedButton>
    </>
  );
}
