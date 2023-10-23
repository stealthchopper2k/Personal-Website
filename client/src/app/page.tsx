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
        <title>Leo</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="max-h-screen overflow-y-scroll will-change-auto md:snap-y md:snap-mandatory">
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
// bg-gray-900
export default MainComponent;
