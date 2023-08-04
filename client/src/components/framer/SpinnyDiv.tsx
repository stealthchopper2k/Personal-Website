import { motion } from "framer-motion";

export const SpinnyDiv = () => (
  <motion.div
    className="absolute bottom-0 w-24 h-24 bg-black rounded-full"
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 1470, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    transition={{
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 1],
      repeat: Infinity,
      repeatDelay: 1,
    }}
  />
);
