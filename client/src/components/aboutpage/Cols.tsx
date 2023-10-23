// Cols.js
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Cols() {
  return (
    <div className="hidden md:flex flex-row md:gap-10 md:mt-5 xl:mt-10">
      <div className="flex flex-col mb-5 md:mb-0 mt-5">
        <h1 className="text-3xl md:text-4xl tracking-wide whitespace-nowrap mb-5 md:mb-2">
          Certifications
        </h1>
        <div className="flex flex-row gap-4 md:gap-10 mt-2">
          <Link
            className="rounded-lg w-20 md:w-24 lg:w-32 animate-pulse md:mr-2"
            href="https://www.linkedin.com/posts/leo2k_happy-to-announce-that-i-got-a-first-class-activity-7093219324294746112-SLsp?"
          >
            <Image
              src="/gradmain.png"
              alt="B Cert"
              width={300}
              height={300}
            />
            <h1 className="hidden md:block mt-2">Software Degree</h1>
          </Link>
          <Link
            className="rounded-lg w-12 md:w-16 lg:w-32 animate-pulse md:ml-2 md:mt-0"
            href="https://bcert.me/bc/html/show-badge.html?b=hdffycdr"
          >
            <Image
              src="/badge.png"
              alt="B Cert"
              width={80}
              height={100}
            />
            <h1 className="hidden md:block mt-2">Ministry Of Defence</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
