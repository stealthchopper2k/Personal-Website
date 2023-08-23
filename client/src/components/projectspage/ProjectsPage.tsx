"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import ProjComponent from "./ProjComponent";
import Linkshare from "./Linkshare";
import Adcon from "./Adcon";
import { FaGithub } from "react-icons/fa";
import { LiaGoogleDrive } from "react-icons/lia";

function ProjectsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      id={"projectspage"}
      className="h-screen snap-start border-b-2 border-solid border-black text-white bg-gray-900"
      ref={ref}
      style={{
        transform: isInView ? "translateY(0)" : "translateX(-200px)",
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        opacity: isInView ? 1 : 0,
      }}
    >
      <div className="flex w-full h-full gap-10 items-start justify-start mt-10 p-16 sm:p-16 lg:p-36">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-6xl md:text-8xl tracking-wide mb-10">Projects</h1>
          <ProjComponent
            project_name="Linkshare"
            img="/linkshare.png"
            href="https://link-share.co.uk"
            Icon={FaGithub}
            IconColor="white"
            description="A web-service using the cloud for storing and collaborating on
          improved hyperlink pages."
          >
            <Linkshare />
          </ProjComponent>
          <ProjComponent
            project_name="Industrial Works"
            img=""
            Icon={LiaGoogleDrive}
            IconColor="yellow"
            href="https://drive.google.com/drive/u/0/folders/1_mlvhFu4QwqV5jv0-uZYGK_qL_esNR-Z"
            description="A 28+ table database for a large company with thorough explanation and
            examples."
          >
            <Adcon />
          </ProjComponent>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
{
  /* <AnimatedButton>
<li className="rounded-lg w-16 md:w-24">
  <Link href="https://bcert.me/bc/html/show-badge.html?b=hdffycdr">
    <Image src="/badge.png" alt="B Cert" width="100" height="100" />
  </Link>
</li>
</AnimatedButton> */
}
