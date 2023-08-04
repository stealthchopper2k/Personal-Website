"use client";
import React from "react";
import FrontPage from "../components/FrontPage";

function MainComponent() {
  return (
    <main className="snap-y my-auto snap-mandatory h-screen snap-start flex-shrink-0 overflow-scroll">
      <FrontPage />
      <FrontPage />
    </main>
  );
}

export default MainComponent;
