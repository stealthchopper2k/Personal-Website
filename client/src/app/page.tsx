"use client";
import React from "react";
import FrontPage from "../components/FrontPage";
import SkillsPage from "@/components/SkillsPage";

function MainComponent() {
  return (
    <main className="snap-y my-auto snap-mandatory h-screen snap-start flex-shrink-0 overflow-scroll">
      <FrontPage />
      <SkillsPage />
    </main>
  );
}

export default MainComponent;
