import React from "react";
import {
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="theend ">
      <h1 className="theend-h1 ">
        Термосол д.о.о. , Врање, Србија. Сва права задржана.
        <a className="span mr-5 ml-1" href="mailto:djordjevicsasa24@gmail.com">
          <span className="text-white">E-Mail:{"  "}</span>
          djordjevicsasa24@gmail.com
        </a>
        {"     "}
        <div className="flex justify-center flex-col text-center">
          <span className="span">
            <span className="text-white">Телефон:{"    "}</span>
            <a href="tel:+381605661344">+381 60 566 13 44</a> {"  "}
          </span>
          <span className="span ml-[57px]">
            <a href="tel:+381612685093"></a>+381 61 268 50 93
          </span>
        </div>
      </h1>
      <div className="theend-social">
        <AiOutlineFacebook className="facebook" />
        <AiOutlineInstagram className="instagram" />
      </div>
    </footer>
  );
};

export default Footer;
