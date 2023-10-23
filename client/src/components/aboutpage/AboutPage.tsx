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
      className="max-h-screen snap-center snap-start text-white bg-gray-900"
      ref={ref}
    >
      <div className="flex flex-col w-full h-full items-center md:flex-row justify-center p-12 md:p-16 xl:p-20 2xl:p-40">
        <div className="w-full md:w-2/4">
          <h1 className="text-5xl whitespace-nowrap ml-5 md:text-8xl mb-5 md:mb-10">
            About me
          </h1>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <p className="flex text-start text-md md:text-md flex-wrap">
              Results driven individual who is focused to ensuring positive transformation within my organisation and clients. Keen interest in a career in Data Analytics. 
            </p>
            <p className="flex text-start text-md md:text-md mt-3 md:mt-6 flex-wrap">
              Currently a Data Trainee at AI Core conducting Exploratory Data Analysis and building Power BI reports on customer loans in finance. Experience applying statistical methods and data visualisation techniques to uncover patterns, relationships and anomalies in the loan data. Helping the business make more informed decisions about loan approvals, pricing and risk management. 
            </p>
            <p className="flex text-start text-md md:text-md mt-3 md:mt-6 flex-wrap">
              With my experience and degree in Software Engineering, having built numerous desired projects in both team and solo settings, I am confident in my ability to achieve results. 
            </p>
          </motion.button>
          <Cols />
        </div>
        <div className="w-full flex justify-center items-center">
          <motion.div className="flex justify-center relative">
            <ImageContainer backgroundImages={images} changing={false} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
