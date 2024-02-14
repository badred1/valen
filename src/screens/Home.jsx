import React, { useState } from "react";
import "./Home.scss";
import sad from "../assets/sad-sad-cat.gif";
import happy from "../assets/happy.gif";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();

  const onClick = () => {
    setSelected(true);
    setTimeout(() => {
      navigate("/pick-date");
    }, 3000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.25 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="container"
      >
        {selected ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.25 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.25 }}
            transition={{ duration: 1 }}
            className="overlay"
          >
            <div className="gif_container">
              <img src={happy} className="gif" alt="loading..." />
            </div>
          </motion.div>
        ) : (
          <div className="content">
            <p className="title">Will you be my Valentine ?</p>
            <div className="gif_container">
              <img src={sad} className="gif" alt="loading..." />
            </div>
            <div className="options">
              <button className="option" onClick={onClick}>
                Yes
              </button>
              <button className="option" onClick={onClick}>
                Yes
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
