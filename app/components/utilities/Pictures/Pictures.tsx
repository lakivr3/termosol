"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Pictures.css";
import { slideIn } from "../motions";
import SectionWrapper from "../SectionWraper";

const Pictures = () => {
  const pictures = [
    "https://res.cloudinary.com/dpqa0z1g9/image/upload/v1723288687/imag1_wcmzog.jpg",
    "https://res.cloudinary.com/dpqa0z1g9/image/upload/v1723288687/imag9_ypgwvr.jpg",
    "https://res.cloudinary.com/dpqa0z1g9/image/upload/v1723288687/imag3_rphs0g.jpg",
    "https://res.cloudinary.com/dpqa0z1g9/image/upload/v1723288687/imag4_yxo11k.jpg",
    "https://res.cloudinary.com/dpqa0z1g9/image/upload/v1723288687/imag10_iyb9xg.jpg",
    "https://res.cloudinary.com/dpqa0z1g9/image/upload/v1723288688/imag2_u26b4n.jpg",
    "https://res.cloudinary.com/dpqa0z1g9/image/upload/v1723288688/imag5_zl7t2v.jpg",
    "https://res.cloudinary.com/dpqa0z1g9/image/upload/v1723288689/imag11_hyf4nc.jpg",
    "https://res.cloudinary.com/dpqa0z1g9/image/upload/v1723288689/imag7_dvcdkl.jpg",
    "https://res.cloudinary.com/dpqa0z1g9/image/upload/v1723288689/imag8_gwi3s6.jpg",
    "https://res.cloudinary.com/dpqa0z1g9/image/upload/v1723288689/imag6_dpbzhw.jpg",
  ];

  const [dragConstraints, setDragConstraints] = useState({
    right: 50,
    left: 0,
  });
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const innerCarouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsClient(true);

    const updateConstraints = () => {
      if (innerCarouselRef.current) {
        const totalWidth = innerCarouselRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const leftConstraint = -(totalWidth - viewportWidth);
        setDragConstraints({ right: 50, left: leftConstraint - 100 });
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 840);
      updateConstraints();
    };

    if (isClient) {
      setIsMobile(window.innerWidth <= 840);
      updateConstraints();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isClient]);

  if (!isClient) {
    return null; // Render nothing on the server side
  }
  if (!isMobile)
    return (
      <div>
        <motion.div className="carousel">
          <motion.div
            ref={innerCarouselRef}
            drag="x"
            dragConstraints={dragConstraints}
            className="inner-carousel"
            initial={{ x: 0 }}
          >
            {pictures.map((image: string, index: number) => (
              <motion.div
                key={index}
                className="item"
                variants={slideIn("down", "tween", 0.2 * index, 1)}
              >
                <img src={image} alt={`solarni-kolektori-bojleri-${index}`} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    );
  else
    return (
      <div>
        <div className="carousel">
          <motion.div
            ref={innerCarouselRef}
            drag="x"
            dragConstraints={dragConstraints}
            className="inner-carousel"
            initial={{ x: 0 }}
          >
            {pictures.map((image: string, index: number) => (
              <motion.div key={index} className="item">
                <img src={image} alt={`solarni-kolektori-bojleri-${index}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    );
};

export default SectionWrapper(Pictures, "pictures");
