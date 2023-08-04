import { useAnimationFrame } from "framer-motion";
import { useRef } from "react";
import "./styles.css";

function SpinnyBox() {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200;
    // const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
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
  );
}

export default SpinnyBox;
