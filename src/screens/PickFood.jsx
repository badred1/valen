import { DatePicker, MobileDatePicker } from "@mui/x-date-pickers";
import React, { useState } from "react";
import "./PickFood.scss";
import { AnimatePresence, motion } from "framer-motion";
import dayjs from "dayjs";
import smack from "../assets/cat-smack.gif";
import { useNavigate } from "react-router-dom";

const PickFood = () => {
  const [selected, setSelected] = useState("");
  const [defaultSelected, setDefaultSelected] = useState(false);
  const navigate = useNavigate();

  const nav = (timeout) => {
    console.log(timeout);
    setTimeout(() => {
      navigate("/thanks");
    }, timeout || 3000);
  };
  const onClick = () => {
    setSelected("text");
    nav();
  };

  const handleDef = () => {
    setDefaultSelected(true);
    nav(3000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.25 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="container"
      >
        {selected === "" ? (
          <>
            <p className="title">Where do u want to eat babyyy 😋</p>
            <div className="image-picker">
              <div className="row">
                <div onClick={(e) => onClick(e)} className="pick">
                  <span>Mykonox</span>
                </div>
                <div onClick={(e) => onClick(e)} className="pick">
                  <span>Ashokayx</span>
                </div>
              </div>
              <div onClick={(e) => onClick(e)} className="row">
                <div className="pick">
                  <span>Chiks</span>
                </div>
                <div onClick={(e) => handleDef()} className="pick">
                  <span>We will see bhal dima 🙄</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.75 }}
            className="container"
          >
            {defaultSelected ? (
              <>
                <p className="title">Hnaaa diiima gha nb9aw bhal haka ?</p>
                <div className="gif_container">
                  <img src={smack} className="gif" alt="loading..." />
                </div>
              </>
            ) : (
              <p className="title">Good girl 😍</p>
            )}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default PickFood;
