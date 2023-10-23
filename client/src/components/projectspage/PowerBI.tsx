import React from "react";
import { AnimatedButton } from "../skillpage/ParaDiv";
import { SiPowerbi } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiPandas } from "react-icons/si"
import {FcStatistics} from "react-icons/fc"

export default function LoansInFinance() {
  return (
    <>
    <AnimatedButton>
    <SiPowerbi color={"yellow"} />
    <span className="hidden md:block text-white text-lg tracking-wide">
      Power BI
    </span>
      </AnimatedButton>
      <AnimatedButton>
          <SiPostgresql color="#3333ff" />
          <span className="hidden md:block text-white text-lg tracking-wide">
            PostgreSQL
          </span>
      </AnimatedButton>
      <AnimatedButton>
          <SiPandas color="white" />
          <span className="hidden md:block text-white text-lg tracking-wide">
            Pandas
          </span>
      </AnimatedButton>
      <AnimatedButton>
          <FcStatistics />
          <span className="hidden md:block text-white text-lg tracking-wide">
            Statistics
          </span>
      </AnimatedButton>
    </>
  );
}