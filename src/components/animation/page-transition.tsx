import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import "../../css/custom.css";

interface TransitionProps {
  children: ReactNode;
}

const Transition: React.FC<TransitionProps> = ({ children }) => {
  return (
    <>
      {children}
      {/* transition logic from codegrid */}
      <motion.div
        className="slide-in fixed z-[500] top-0 left-0 w-full h-screen bg-black origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out fixed z-[500] top-0 left-0 w-full h-screen bg-black origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.8, delay: 0, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default Transition;
