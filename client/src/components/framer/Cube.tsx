import {
  useAnimationFrame,
  motion,
  useDragControls,
  useSpring,
  useMotionValue,
  distance,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./styles.css";

function SpinnyBox() {
  const [isDragging, setDragging] = useState(false);

  const controls = useDragControls();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const ref = useRef(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 400;
    ref.current.style.transform = `rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      drag
      dragControls={controls}
      dragElastic={1}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      onDragStart={(e) => {
        setDragging(true);
      }}
      onDragEnd={(e) => {
        setDragging(false);
      }}
      whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
    >
      <div className="container">
        <div className="cube" ref={ref}>
          <div className="side front" />
          <div className="side left" />
          <div className="side right" />
          <div className="side top" />
          <div className="side bottom" />
          <div className="side back" />
        </div>
      </div>
    </motion.div>
  );
}

export default SpinnyBox;
