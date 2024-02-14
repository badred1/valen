import React from "react";
import "./Thanks.scss";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import animation from "../assets/Anim.json";
const Thanks = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.75 }}
        className="container"
      >
        <p className="title">
          Thank you for being my girl, I love you sooooooo much ❤️❤️❤️❤️❤️❤️
        </p>
        <div className="lottie">
          <Lottie animationData={animation} loop={true} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Thanks;
