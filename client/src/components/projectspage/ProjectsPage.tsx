import React from "react";
import ProjComponent from "./ProjComponent";
import Linkshare from "./Linkshare";
import Adcon from "./Adcon";
import { FaGithub } from "react-icons/fa";
import { LiaGoogleDrive } from "react-icons/lia";
import Excel from "./Excel";
import LoansInFinance from "./PowerBI";

function ProjectsPage() {
  return (
    <div
      id={"projectspage"}
      className="max-h-screen h-screen snap-center snap-always text-white bg-gray-900"
    >
      <div className="flex flex-col items-start justify-start p-8 lg:p-16">
        <h1 className="text-3xl ml-10 md:text-5xl tracking-wide mb-6">Projects</h1>
        <ProjComponent
          project_name="Linkshare"
          img="/linkshare.png"
          href="https://link-share.co.uk"
          Icon={FaGithub}
          IconColor="white"
          description="A web-service using the cloud for storing and collaborating on improved hyperlink pages."
        >
          <Linkshare />
        </ProjComponent>
        <ProjComponent
          project_name="Industrial LTD"
          img=""
          Icon={LiaGoogleDrive}
          IconColor="yellow"
          href="https://drive.google.com/drive/u/0/folders/1_mlvhFu4QwqV5jv0-uZYGK_qL_esNR-Z"
          description="Designing, documenting, and deploying a 28+ table database with a thorough explanation and examples."
        >
          <Adcon />
        </ProjComponent>
        <ProjComponent
          project_name="Transforming Quiz Data"
          img=""
          Icon={FaGithub}
          IconColor=""
          href="https://github.com/stealthchopper2k/Excel-Manipulation"
          description="Cleaning and modeling quiz data into an actionable format using Excel, SQL, and Pandas."
        >
          <Excel />
        </ProjComponent>
        <ProjComponent
          project_name="Exploratory Data Analysis"
          img=""
          Icon={FaGithub}
          IconColor=""
          href="https://github.com/stealthchopper2k/exploratory-data-analysis---customer-loans-in-finance"
          description="Performing EDA on the loan portfolio, using various statistical and data visualization techniques to uncover patterns, relationships, and anomalies in the loan data."
        >
          <LoansInFinance />
        </ProjComponent>
      </div>
    </div>
  );
}

export default ProjectsPage;
