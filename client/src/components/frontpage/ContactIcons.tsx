import React from "react";
import { AnimatedButton } from "../skillpage/ParaDiv";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

export default function ContactIcons() {
  return (
    <div className="flex flex-row">
      <AnimatedButton>
        <FaGithub color={"white"}>
          <a href="https://github.com/stealthchopper2k/Linkshare-" />
        </FaGithub>
      </AnimatedButton>
      <AnimatedButton>
        <AiFillLinkedin color={"white"}>
          <a href="https://www.linkedin.com/in/leo2k/" />
        </AiFillLinkedin>
      </AnimatedButton>
    </div>
  );
}
