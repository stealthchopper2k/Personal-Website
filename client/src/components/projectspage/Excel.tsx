import React from "react";
import { AnimatedButton } from "../skillpage/ParaDiv";
import {RiFileExcel2Fill} from "react-icons/ri"

export default function Excel() {
  return (
    <>
    <AnimatedButton>
          <RiFileExcel2Fill color={"green"} />
          <span className="hidden md:block text-white text-xl tracking-wide">
            Excel
          </span>
    </AnimatedButton>
    </>
  );
}