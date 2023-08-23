"use client";
import React from "react";
import FrontPage from "../components/frontpage/FrontPage";
import SkillsPage from "@/components/skillpage/SkillsPage";
import Navbar from "../components/framer/navigation/Navbar";
import AboutPage from "@/components/aboutpage/AboutPage";
import ContactPage from "@/components/contactpage/ContactPage";
import ProjectsPage from "@/components/projectspage/ProjectsPage";
import Head from "next/head";

function MainComponent() {
  return (
    <>
      <Head>
        <title>This page has a title 🤔</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="snap-y my-auto snap-mandatory h-screen snap-start flex-shrink-0 overflow-scroll">
        <Navbar />
        <FrontPage />
        <AboutPage />
        <SkillsPage />
        <ProjectsPage />
        <ContactPage />
      </main>
    </>
  );
}

export default MainComponent;
