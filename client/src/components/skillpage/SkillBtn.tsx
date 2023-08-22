import { motion } from "framer-motion";
import React from "react";

interface SkillButtonProps {
  icon: React.ReactElement;
  label: string;
  color: string;
}

interface AnimatedButtonProps {
  children: JSX.Element[];
}

interface SkillBlockProps {
  title: string;
  description: string;
  iconButtons: JSX.Element[];
}

function AnimatedButton({ children }: AnimatedButtonProps) {
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      {children}
    </motion.button>
  );
}

export function SkillButton({ icon, label, color }: SkillButtonProps) {
  return (
    <AnimatedButton>
      {React.cloneElement(icon, { size: 80, color: color })}
      <span className="text-white text-xl tracking-wide">{label}</span>
    </AnimatedButton>
  );
}

export function SkillBlock({
  title,
  description,
  iconButtons,
}: SkillBlockProps) {
  return (
    <div className="flex-col justify-between flex-grow">
      <h3 className="text-5xl">{title}</h3>
      <p className="text-xl mt-auto">{description}</p>
      <div className="flex flex-row justify-center items-center gap-5">
        {iconButtons}
      </div>
    </div>
  );
}
