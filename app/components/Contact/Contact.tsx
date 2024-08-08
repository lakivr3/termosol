"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { slideIn } from "../utilities/motions";
import SectionWrapper from "../utilities/SectionWraper";
import SolarCanvas from "./SolarCanvas";

const Contact = () => {
  const formRef = useRef<any>();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    //wCkTd-FZbl04ADTVE
    //template_uaok02j
    //service_q748shd
    emailjs
      .send(
        "service_q748shd",
        "template_uaok02j",
        {
          from_name: form.name,
          to_name: "Termosol d.o.o",
          from_email: form.email,
          to_email: "djordjevicsasa24@gmail.com",
          message: form.message,
        },
        "wCkTd-FZbl04ADTVE"
      )
      .then(
        () => {
          setLoading(false);
          alert("Sent!");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Something went wrong.");
        }
      );
  };
  return (
    <div className="h-[100%]">
      <h1 className="text-5xl font-bold  text-[#004884] text-center  mt-[2rem]">
        Контакт
      </h1>
      <div className="xl:mt-4 xl:flex-row flex-col flex gap-10 overflow-hidden ">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 m-12  p-8 rounded-2xl border border-black bg-gray-100"
        >
          <h1 className="font-bold text-3xl text-center">
            Пошаљите нам поруку
          </h1>
          <form
            action=""
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12  flex flex-col gap-8"
          >
            <label htmlFor="" className="flex flex-col">
              <span className="text-black font-medium mb-4">Ваше име</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Које је Ваше име?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border border-black font-medium"
              />
            </label>

            <label htmlFor="" className="flex flex-col">
              <span className="text-black font-medium mb-4">Ваш Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Који је Ваш email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border border-black font-medium"
              />
            </label>

            <label htmlFor="" className="flex flex-col">
              <span className="text-black font-medium mb-4">Ваша порука</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Шта Вас интересује?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border border-black font-medium"
              />
            </label>
            <button
              type="submit"
              className=" border border-black bg-tertiary py-3 px-8 outline-none w-fit text-black font-bold shadow-md shadow-primary rounded-xl text-center"
            >
              {loading ? "Слање..." : "Пошаљи"}
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
        >
          <div className="flex-[0.75]  bg-black-100 m-12  p-8 rounded-2xl border border-black bg-gray-100  ">
            <h1 className="font-bold text-3xl text-center mb-12">
              Информације
            </h1>
            <div className="flex flex-col gap-5 mt items-start">
              <h1
                className="text-xl cursor-pointer hover:text-[#ffd400]"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/uyGRmdqgi7yHdipN6",
                    "_blank"
                  )
                }
              >
                Адреса: Пролетерске Бригаде 45
              </h1>
              <h1
                className="text-xl cursor-pointer hover:text-[#ffd400]"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/uyGRmdqgi7yHdipN6",
                    "_blank"
                  )
                }
              >
                Поштански број: 17500 Врање
              </h1>
              <h1 className="text-xl cursor-pointer hover:text-[#ffd400]">
                Радно време: Пон - Суб, 08:00 – 18:00 
              </h1>
              <h1 className="text-xl">
                E-mail:{" "}
                <a
                  className="cursor-pointer hover:text-[#ffd400] "
                  href="mailto:djordjevicsasa24@gmail.com"
                >
                  djordjevicsasa24@gmail.com
                </a>
              </h1>
              <div className="flex">
                <h1 className="text-xl">Телефон: </h1>
                <div className="ml-1">
                  <h1 className="text-xl">
                    {" "}
                    <a
                      href="tel:+381605661344"
                      className="cursor-pointer hover:text-[#ffd400] "
                    >
                      +381 60 566 13 44
                    </a>
                  </h1>
                  <h1 className="text-xl">
                    <a
                      href="tel:+381612685093"
                      className="cursor-pointer hover:text-[#ffd400] "
                    >
                      +381 61 268 50 93
                    </a>{" "}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "kontakt");
