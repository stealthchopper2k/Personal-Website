"use client";
import React from "react";
import FrontPage from "../components/frontpage/FrontPage";
import SkillsPage from "@/components/skillpage/SkillsPage";
import Navbar from "../components/framer/navigation/Navbar";
import AboutPage from "@/components/aboutpage/AboutPage";
import Contactpage from "@/components/contactpage/Contactpage";
import ProjectsPage from "@/components/projectspage/ProjectsPage";

function MainComponent() {
  return (
    <>
      <main className="snap-y my-auto snap-mandatory h-screen snap-start flex-shrink-0 overflow-scroll">
        <Navbar />
        <FrontPage />
        <AboutPage />
        <SkillsPage />
        <ProjectsPage />
        <Contactpage />
      </main>
    </>
  );
}

export default MainComponent;
