import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import ContactIcons from "./ContactIcons";

export default function TitleUnderBar() {
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
      <ul className="flex md:flex-row items-center mt-[-3rem]" ref={ref}>
        <div className="hidden md:flex flex-row justify-center items-center"></div>
        <ContactIcons />
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
