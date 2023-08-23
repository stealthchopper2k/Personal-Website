import React from "react";
import { AnimatedButton } from "../skillpage/ParaDiv";
import { SiPostgresql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { LiaGoogleDrive } from "react-icons/lia";

export default function Adcon() {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-5">
      <div className="flex flex-col justify-between">
        <div className="flex flex-row justify-start items-center">
          <AnimatedButton>
            <a
              href="https://drive.google.com/drive/u/0/folders/1_mlvhFu4QwqV5jv0-uZYGK_qL_esNR-Z"
              className="text-4xl md:text-5xl whitespace-nowrap"
            >
              Industrial Works
            </a>
          </AnimatedButton>
          <AnimatedButton>
            <a href="https://drive.google.com/drive/u/0/folders/1_mlvhFu4QwqV5jv0-uZYGK_qL_esNR-Z">
              <LiaGoogleDrive color={"yellow"} />{" "}
            </a>
          </AnimatedButton>
        </div>
        <p className="text-xl mt-auto w-96 md:w-full">
          A 30 table database for a company with thorough explanation and
          examples.
        </p>
      </div>
      <div className="flex flex-row flex-wrap gap-5">
        <AnimatedButton>
          <SiPostgresql color="#3333ff" />
          <span className="hidden md:block text-white text-xl tracking-wide">
            PostgreSQL
          </span>
        </AnimatedButton>
      </div>
    </div>
  );
}
