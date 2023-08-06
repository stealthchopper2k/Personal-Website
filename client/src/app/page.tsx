"use client";
import React from "react";
import FrontPage from "../components/frontpage/FrontPage";
import SkillsPage from "@/components/skillpage/SkillsPage";
import Navbar from "../components/framer/navigation/Navbar";
import { Background } from "@/components/frontpage/Background";
import AboutPage from "@/components/AboutPage";

function MainComponent() {
  return (
    <>
      <main className="snap-y my-auto snap-mandatory h-screen snap-start flex-shrink-0 overflow-scroll">
        <Navbar />
        <FrontPage />
        <SkillsPage />
        <AboutPage />
      </main>
    </>
  );
}

export default MainComponent;
