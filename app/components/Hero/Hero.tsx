"use client";
import React from "react";
import "./Hero.css";
import SectionWrapper from "../utilities/SectionWraper";
import { motion } from "framer-motion";
import { slideIn, fadeIn } from "../utilities/motions";
import { useRouter } from "next/navigation";

const Hero = () => {
  const route = useRouter();
  return (
    <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="hero ">
      <div className="hero-content items-center">
        <h1 className="hero-h1-first">ПРВО ПРИВРЕДНО ДРУШТВО ЗА ПРОМЕТ </h1>
        <h1 className="hero-h1-second"> СОЛАРНИХ КОЛЕКТОРА У ЈУЖНОЈ СРБИЈИ</h1>
        <div
          className="px-4 py-2 bg-[#ffd400]  mt-32 rounded-lg cursor-pointer"
          onClick={() => route.push("/#kontakt")}
        >
          <p className="hero-p">Уштеда и до 60% рачуна за струју!</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Hero, "hero");
