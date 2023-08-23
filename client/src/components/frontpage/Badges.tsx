import Link from "next/link";
import Image from "next/image";
import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Badges() {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    const x = Math.sin(t / 500) * 10;
    if (ref.current) {
      ref.current.style.transform = `rotateY(${x}deg)`;
    }
  });

  return (
    <div className="flex flex-row justify-between text-white mt-16 md:mt-10">
      <motion.div
        className="md:p-2 w-7 h-5 mt-[-4rem]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="text-xl md:text-3xl">
          <Typewriter
            deleteSpeed={50}
            typeSpeed={100}
            cursorStyle="_"
            loop={false}
            cursorBlinking={true}
            words={[
              "First Class Software Graduate!",
              "Pursuing Full Stack Development",
              "Lets Talk!",
            ]}
          />
        </div>
      </motion.div>
      <ul
        className="flex md:flex-row items-center mt-[-3rem]"
        ref={ref}
      >
        <div className="hidden md:flex flex-row justify-center items-center">
          <li className="gap-4 text-xl md:2xl">Click for Achievements!</li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="currentColor"
            className="w-12 h-10 m-2 text-ff0066 rounded-full cursor-pointer hover:text-green-600 transition duration-300 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
        <li className="rounded-lg w-20 md:w-32 animate-pulse">
          <Link href="https://www.linkedin.com/posts/leo2k_happy-to-announce-that-i-got-a-first-class-activity-7093219324294746112-SLsp?">
            <Image src="/gradmain.png" alt="B Cert" width="300" height="300" />
          </Link>
        </li>
        <li className="rounded-lg w-16 md:w-24 animate-pulse">
          <Link href="https://bcert.me/bc/html/show-badge.html?b=hdffycdr">
            <Image src="/badge.png" alt="B Cert" width="100" height="100" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
{
  /* <span
className="w-0 h-0 
border-t-[20px] border-t-transparent
border-l-[50px] border-l-green-500
border-b-[20px] border-b-transparent"
></span> */
}
