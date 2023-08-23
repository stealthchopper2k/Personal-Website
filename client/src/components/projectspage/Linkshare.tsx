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
    <div className="flex flex-col md:flex-row md:items-start gap-5 mb-10">
      <div className="flex flex-col justify-between">
        <div className="flex flex-row justify-start items-center">
          <AnimatedButton>
            <a href="https://link-share.co.uk" className="text-5xl">
              Linkshare
            </a>
          </AnimatedButton>
          <Image src="/linkshare.png" alt="linkshare" width={80} height={80} />
          <AnimatedButton>
            <FaGithub color={"white"}>
              <a href="https://github.com/stealthchopper2k/Linkshare-" />
            </FaGithub>
          </AnimatedButton>
        </div>
        <p className="text-xl mt-auto w-96 md:w-full">
          A web-service using the cloud for storing and collaborating on
          improved hyperlink pages.
        </p>
      </div>
      <div className="flex flex-row flex-wrap gap-5">
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
      </div>
    </div>
  );
}
