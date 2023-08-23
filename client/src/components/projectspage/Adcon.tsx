import React from "react";
import { AnimatedButton } from "../skillpage/ParaDiv";
import { SiPostgresql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { LiaGoogleDrive } from "react-icons/lia";

export default function Adcon() {
  return (
    <>
      <AnimatedButton>
        <SiPostgresql color="#3333ff" />
        <span className="hidden md:block text-white text-xl tracking-wide">
          PostgreSQL
        </span>
      </AnimatedButton>
    </>
  );
}
