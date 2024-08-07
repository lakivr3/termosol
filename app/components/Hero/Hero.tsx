"use client";
import React from "react";
import "./Hero.css";
import SectionWrapper from "../utilities/SectionWraper";
import { motion } from "framer-motion";
import { slideIn, fadeIn } from "../utilities/motions";

const Hero = () => {
  return (
    <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="hero ">
      <div className="hero-content">
        <h1 className="hero-h1-first">ПРВО ПРИВРЕДНО ДРУШТВО ЗА ПРОМЕТ </h1>
        <h1 className="hero-h1-second"> СОЛАРНИХ КОЛЕКТОРА У ЈУЖНОЈ СРБИЈИ</h1>
        {/* <p className="hero-p">Уштеда и до 60% рачуна за струју!</p> */}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Hero, "hero");
