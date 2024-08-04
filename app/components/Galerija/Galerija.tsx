"use client";
import React, { useRef } from "react";
import "./Galerija.css";
import SectionWrapper from "../utilities/SectionWraper";

import dynamic from "next/dynamic";

const Pictures = dynamic(() => import("../utilities/Pictures/Pictures"), {
  ssr: false,
});

const pictures = [
  "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/363356670_1799632110474383_7058529570321973589_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=piNRNqfrC70Q7kNvgHIY6gm&_nc_ht=scontent.fbeg5-1.fna&gid=AqOlcCexfrrlgToFA_b6gAQ&oh=00_AYCO5w3jQBhZ4ANYdL67I-e56u6m7X3SavqdOpSWN_UdhA&oe=66B1970C  ",
  "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/357491205_1799632147141046_8033395792209053175_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YJd4_-WkJxsQ7kNvgHG7auI&_nc_ht=scontent.fbeg5-1.fna&gid=AgFvvchBv3uYbIeEWd-EE83&oh=00_AYBp5V15OzzX7Hty_Xe_gpkmjDeydYN5mEsSlrb0uYVGZw&oe=66B170D8",
  "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/351975162_276585804772647_4093045611281415864_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rKKjrOMPu7UQ7kNvgGhdwr-&_nc_ht=scontent.fbeg5-1.fna&oh=00_AYCTKWs6iYEwuGNC7bTVvHew4XjldGB9Q1gJGy0lWyNvwg&oe=66B16D39",
  "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/339106584_904389344162746_1178950321259484083_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bZMqkOTvyhcQ7kNvgFa5zwY&_nc_ht=scontent.fbeg5-1.fna&oh=00_AYDFBHRv-Z3g1uts3qOUi84EFLUWkw7ty8_pb78BZm6BDQ&oe=66B1955B",
  "https://scontent.fbeg5-1.fna.fbcdn.net/v/t1.6435-9/178608044_1236747833429483_5079536273516440213_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=7EuCPKqnDt0Q7kNvgEMOxfE&_nc_ht=scontent.fbeg5-1.fna&oh=00_AYA6Bme4GuUCdF_jHjGEDWeCzv9Ln_Ig11hiOG3MuOW4Wg&oe=66D315F1",
  "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/448370074_1993150681122524_3946871776352632263_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RbBLYx-SvQAQ7kNvgEli9EQ&_nc_ht=scontent.fbeg5-1.fna&gid=A5OsUmAW6TiCx1ABkCgl8_m&oh=00_AYC73QZMc3N0GFd1VsytBpurTq0pDGSV2ll-rEFwaRTjhw&oe=66B18549",
  "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/448162298_1989946751442917_6343252643240259512_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=EoGVzqTG5vgQ7kNvgHQFuqj&_nc_ht=scontent.fbeg5-1.fna&gid=ACyw2WFkR-c7qdVNB783kfL&oh=00_AYD5uXRw8qNqSqi9ShJLAXc-DYgChsevCy4wMCp7F9FuFQ&oe=66B188A6",
  "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/447391198_1986717671765825_1609689367910934569_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cg4yD-zHI-gQ7kNvgH-iqdS&_nc_ht=scontent.fbeg5-1.fna&oh=00_AYDV1Dx165Dicqys-WQ9YHBvBJVnmiKl-BMuy9UgGgdJWw&oe=66B1785E",
  "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/421995376_1968155606955365_5728857468970055040_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sWTUV6U65UUQ7kNvgGD6vTQ&_nc_ht=scontent.fbeg5-1.fna&gid=Agfghh_8_w5Zc5hDTLIH9dA&oh=00_AYAAE9bOXlRV7kRbJtAZfMxfa3KS44r6_YqnedbaRfKN_Q&oe=66B19322",
];

const Gallery = () => {
  const scrollRef = useRef(null);

  return (
    <div className="galerija flex__center">
      <div className="galerija-content ">
        <h1 className="text-5xl text-[#ffd400] font-bold text-center">
          Фото галерија
        </h1>
        <p className="text-lg text-[#004884] mt-10">
          Погледајте наше фотографије са терена приликом монтирања наших
          производа.
        </p>
      </div>
      <div className="galerija-images">
        <div className="galerija-images_container" ref={scrollRef}>
          <Pictures />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Gallery, "galerija");
