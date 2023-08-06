import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variants_item = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface Props {
  onListClick: (page: string) => void;
}

export const Navigation = ({ onListClick }: Props) => (
  <motion.ul className="list" variants={variants}>
    <motion.li
      onClick={() => onListClick("frontpage")}
      className="list-item"
      variants={variants_item}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-4xl text-black">Front Page</span>
    </motion.li>
    <motion.li
      onClick={() => onListClick("skillpage")}
      className="list-item"
      variants={variants_item}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-4xl text-black">Skills</span>
    </motion.li>
  </motion.ul>
);
