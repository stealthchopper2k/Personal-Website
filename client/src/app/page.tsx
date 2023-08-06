"use client";
import React from "react";
import FrontPage from "../components/FrontPage";
import SkillsPage from "@/components/SkillsPage";
import Navbar from "../components/framer/navigation/Navbar";

function MainComponent() {
  return (
    <>
      <main className="snap-y my-auto snap-mandatory h-screen snap-start flex-shrink-0 overflow-scroll">
        <Navbar />
        <FrontPage />
        <SkillsPage />
      </main>
    </>
  );
}

export default MainComponent;
