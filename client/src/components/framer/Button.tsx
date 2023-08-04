import { motion } from "framer-motion";

export const BouncyBtn = () => (
  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} />
);
