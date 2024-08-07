"use client";
import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import { slideIn } from "../utilities/motions";
import SectionWrapper from "../utilities/SectionWraper";

const About = () => {
  return (
    <div className="about">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex flex-col h-[70%]  justify-start gap-14  flex-[0.5] mx-10 mb-5 "
      >
        <h1 className="flex-[0.2] text-5xl text-[#ffd400] font-bold text-center ">
          Историја
        </h1>
        <div className=" flex flex-col gap-3">
          <p className="about-p ">
            "Термосол" д.о.о. Врање је основано 2016. године као специјализовано
            предузеће за дистрибуцију и уградњу соларних колектора. Са седиштем
            у Врању, ово привредно друштво је посвећено промоцији обновљивих
            извора енергије и побољшању енергетске ефикасности у Србији.
          </p>
          <p className="about-p ">
            Као генерални заступник за Републику Србију, "Термосол" сарађује са
            водећом компанијом "Текосолар" из Северне Македоније, која је
            позната по својим иновативним решењима у области коришћења соларне
            енергије.
          </p>
          <p className="about-p ">
            "Термосол" нуди свеобухватне услуге које обухватају инсталирање и
            одржавање соларних система, прилагођених потребама домаћинстава и
            пословним субјеката.
          </p>
        </div>
      </motion.div>
      <div className="about-div"></div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex flex-col h-[70%] gap-14  justify-start  flex-[0.5] mx-10"
      >
        <h1 className="flex-[0.2] text-5xl  text-[#ffd400] font-bold text-center">
          О нама
        </h1>
        <div className=" flex flex-col gap-3">
          <p className="about-p ">
            {"  "}"Текосолар" и "Термосол" су реномиране компаније у области
            соларне енергије, које заједно нуде висококвалитетне равне колекторе
            и колекторе са вакумским цевима. Њихови производи су дизајнирани за
            загревање воде у домаћинствима и пословним објектима, користећи
            бесплатну и обновљиву енергију Сунца.
          </p>
          <p className="about-p ">
            {"  "}Ова партнерска сарадња омогућава корисницима у Србији приступ
            најсавременијим технологијама за коришћење соларне енергије,
            доприносећи енергетској ефикасности и одрживости.
          </p>
          <p className="about-p ">
            {"  "}Наш тим искусних професионалаца обезбеђује висок ниво услуга и
            техничке подршке, осигуравајући да сваки клијент добије најбоље
            могуће решење за своје објекте. Са фокусом на квалитет, поузданост и
            задовољство клијената, "Термосол" је посвећен изградњи одрживе
            будућности кроз примену коришћења соларних технологија.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "onama");
