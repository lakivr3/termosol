"use client";
import React, { useEffect, useState } from "react";
import { PiSolarPanelLight } from "react-icons/pi";
import { motion } from "framer-motion";
import { slideIn } from "../utilities/motions";

import "./Prednosti.css";
import SectionWrapper from "../utilities/SectionWraper";

const text = [
  "Соларна енергија је инвестиција високих перформанса",
  "Соларна енергија обезбеђује чисту енергију",
  "Соларно повећава вредност куће",
  "Доприноси чистој и зеленој животној средини",
  "Смањује ваше рачуне за струју",
];

const Prednosti = () => {
  const [iconSize, setIconSize] = useState(330);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) setIconSize(250);
      if (window.innerWidth <= 700) setIconSize(200);

      window.addEventListener("resize", handleResize);

      // Set the initial size
      handleResize();

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    };
  }, []);
  return (
    <div className=" prednost">
      <div className="prednost-naslov">
        <h1 className="prednost-naslov-h1">
          <span className="prednost-naslov-h1-span">5</span> предности коришћења
          соларне енергије
        </h1>
      </div>
      <div className="prednost-main">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="rounded-r-full prednost-main-icon"
        >
          <PiSolarPanelLight size={iconSize} color="#004884" />
        </motion.div>
        <div className="prednost-main-content">
          {text.map((text, index) => (
            <motion.div
              key={index}
              variants={slideIn("right", "tween", index * 0.2, 1)}
              className=" prednost-main-content-div"
            >
              <p className="prednost-main-content-div-p">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Prednosti, "prednosti");
