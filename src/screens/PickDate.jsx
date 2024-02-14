import { DatePicker, MobileDatePicker } from "@mui/x-date-pickers";
import React, { useState } from "react";
import "./PickDate.scss";
import { AnimatePresence, motion } from "framer-motion";
import dayjs from "dayjs";
import sad from "../assets/cat-dance.gif";
import { useNavigate } from "react-router-dom";

const PickDate = () => {
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.25 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="container"
      >
        {!selected && (
          <>
            <p className="title">Pick a date baby girl 😎</p>
            <MobileDatePicker
              className="picker"
              onAccept={() => {
                setSelected(true);
                setTimeout(() => {
                  navigate("/pick-food");
                }, 3000);
              }}
              minDate={dayjs("2024-02-16")}
              maxDate={dayjs("2024-02-16")}
            />
          </>
        )}
        {selected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.25 }}
            transition={{ duration: 0.75 }}
            className="container"
          >
            <p className="title">You picked the perfect date 😍</p>
            <div className="gif_container">
              <img src={sad} className="gif" alt="loading..." />
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default PickDate;
