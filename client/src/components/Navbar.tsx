"use client";
import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="border-b-4 border-black relative z-50">
      <div className="flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="#" className="flex items-center">
          {/* <Image
            src="/grad.png"
            alt="Flowbite Logo"
            layout="fill"
            objectFit="contain"
            className="h-8 mr-2"
          /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            RabbitHole
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
