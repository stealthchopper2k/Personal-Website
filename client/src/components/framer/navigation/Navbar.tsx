import "./nav.css";
import { useCycle, motion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { useDimensions } from "./use-dimensions";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 20px 20px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Navbar() {
  const handleNavigationClick = (page) => {
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isOpen, toggleOpen] = useCycle(false, true);
  const { height } = useDimensions();

  return (
    <>
      <motion.div
        className={`maincontainer ${isOpen ? "z-10" : "pointer-events-none"}`}
      >
        <motion.nav
          className={`navbarmain`}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
        >
          <motion.div className="background" variants={sidebar} />
          <Navigation onListClick={handleNavigationClick} />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
      </motion.div>
    </>
  );
}
