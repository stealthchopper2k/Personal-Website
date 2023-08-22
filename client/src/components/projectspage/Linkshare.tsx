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
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Linkshare() {
  return (
    <div className="flex flex-row justify-center items-center gap-5">
      <div className="flex-col justify-between flex-grow">
        <div className="flex flex-row justify-start items-center">
          <AnimatedButton>
            <a href="https://link-share.co.uk" className="text-5xl">
              Linkshare
            </a>
          </AnimatedButton>
          <Image src="/linkshare.png" alt="linkshare" width={80} height={80} />
          <FaGithub size={80} color={"white"}>
            <a href="https://github.com/stealthchopper2k/Linkshare-" />
          </FaGithub>
        </div>
        <p className="text-xl mt-auto">
          A cloud tool for storing and collaborating on link pages
        </p>
      </div>
      <AnimatedButton>
        <FaReact size={80} color={"#33ccff"} />
        <span className="text-white text-xl tracking-wide">React</span>
      </AnimatedButton>
      <AnimatedButton>
        <BiLogoJavascript size={80} color={"#FDDA0D"} />
        <span className="text-white text-xl tracking-wide">JavaScript</span>
      </AnimatedButton>
      <AnimatedButton>
        <LiaNode size={80} color="#009933" />
        <span className="text-white text-xl tracking-wide">NodeJS</span>
      </AnimatedButton>
      <AnimatedButton>
        <SiFirebase size={80} color="#FFA500" />
        <span className="text-white text-xl tracking-wide">Firebase</span>
      </AnimatedButton>
      <AnimatedButton>
        <BiLogoGoogleCloud size={80} color={"yellow"} />
        <span className="text-white text-xl tracking-wide">GCP</span>
      </AnimatedButton>
      <AnimatedButton>
        <BsGit size={80} color={"#ff0000"} />
        <span className="text-white text-xl tracking-wide">Git</span>
      </AnimatedButton>
      <AnimatedButton>
        <SiWebpack size={80} color={"#ADD8E6"} />
        <span className="text-white text-xl tracking-wide">Webpack</span>
      </AnimatedButton>
      <AnimatedButton>
        <SiTailwindcss size={80} color={"#33ccff"} />
        <span className="text-white text-xl tracking-wide">Tailwind CSS</span>
      </AnimatedButton>
    </div>
  );
}
