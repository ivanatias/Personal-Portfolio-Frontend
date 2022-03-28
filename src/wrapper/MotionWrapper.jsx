import React from "react";
import { motion } from "framer-motion";

const MotionWrapper = (Component, classNames) =>
  function HOC() {
    return (
      <motion.div
        className={`${classNames}`}
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Component />
      </motion.div>
    );
  };

export default MotionWrapper;
