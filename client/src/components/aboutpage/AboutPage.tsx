import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
import ImageContainer from "./ImageContainer";
import Cols from "./Cols";

export default function AboutPage() {
  const images = ["/me.jpeg"];

  const ref = useRef(null);
  // const isInView = useInView(ref);

  return (
    <div
      id={"aboutpage"}
      className="h-screen max-h-screen snap-center snap-start text-white bg-gray-900"
      ref={ref}
    >
      <div className="flex flex-col items-center justify-center md:flex-row justify-center p-12 md:p-16 xl:p-20 2xl:p-24">
        <div className="w-full md:w-2/4">
          <h1 className="text-5xl whitespace-nowrap md:text-6xl mb-5 md:mb-10 2xl:text-8xl">
            About me
          </h1>
          <div className="shrink text-sm flex text-start mt-3 md:text-xl mt-6 flex-wrap 2xl:text-2xl">
            <p className="mt-3">
              Results driven individual who is focused to ensuring positive transformation within my organisation and clients. Keen interest in a career in Data Analytics. 
            </p>
            <p className="mt-3">
              Currently a Data Trainee at AI Core conducting Exploratory Data Analysis and building Power BI reports on customer loans in finance. Experience applying statistical methods and data visualisation techniques to uncover patterns, relationships and anomalies in the loan data. Helping the business make more informed decisions about loan approvals, pricing and risk management. 
            </p>
            <p className="mt-3">
              With my experience and degree in Software Engineering, having built numerous desired projects in both team and solo settings, I am confident in my ability to achieve results. 
            </p>
          </div>
          <Cols />
        </div>
        <div className="flex justify-center items-center mt-5 md:w-2/4">
          <motion.div className="flex shrink">
            <ImageContainer backgroundImages={images} changing={false} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
