"use client";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import React, { useState } from "react";
import logo from "../../../public/reallogo.jpg";
import "../Navbar/Navbar.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";

const links = [
  { label: "О нама", href: "#onama" }, // Add # for section links
  { label: "Галерија", href: "#galerija" },
  { label: "Констакт", href: "#kontakt" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const route = useRouter();

  const handleLinkClick = (href: string) => {
    setActive(href);
    setToggle(false); // Close menu on link click
  };

  return (
    <nav className="flex flex-col">
      <div className="relative bg-white w-full flex flex-1 justify-between items-center pt-4  px-10">
        <ul className="nav-info">
          <li className="text-nowrap">Адреса: Горњи Нерадовац бб, Врање</li>
          <li className="text-nowrap">МБ: 21179868</li>
          <li className="text-nowrap">ПИВ: 109425464</li>
          <li className="text-nowrap">+381 60 566 13 44</li>
        </ul>

        <div className="flex w-[200px] nav-logo hover:cursor-pointer">
          <Image
            onClick={() => route.push("/")}
            alt="logo"
            className="logo"
            src={logo}
            width={150}
          />
        </div>
        <ul className="nav-menu">
          {links.map((link) => (
            <li
              key={link.label}
              id={link.href}
              className={`${
                active === link.href
                  ? "text-white border-b-2 border-[#ffd400]"
                  : "text-[#004884]"
              } hover:text-[#ffd400] font-medium cursor-pointer`}
            >
              <Link href={link.href} onClick={() => handleLinkClick(link.href)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li
            onClick={() => route.push("/gdesmo")}
            className={`${
              active === "/gdesmo"
                ? "text-[#ffd400] border-b-2 border-[#ffd400]"
                : "text-[#004884]"
            } hover:text-[#ffd400]  font-medium cursor-pointer`}
          >
            Где смо?
          </li>
        </ul>
        {!toggle && (
          <HiMenuAlt3
            className="navbar-links-smallscreen-menu"
            color="black"
            fontSize={27}
            onClick={() => setToggle(true)}
          />
        )}
      </div>
      {toggle && (
        <div className="navbar-links-smallscreen-overlay slide-bottom">
          <IoClose
            className="overlay-close"
            fontSize="1.5em"
            color="#white"
            onClick={() => setToggle(false)}
          />
          <ul className="navbar-links-smallscreen">
            {links.map((link) => (
              <li
                key={link.label}
                className={`${
                  active === link.href
                    ? "text-[#ffd400] border-b-2 border-[#ffd400]"
                    : "text-[#004884]"
                } hover:text-[#ffd400] font-medium cursor-pointer`}
              >
                <Link
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li
              onClick={() => route.push("/gdesmo")}
              className={`${
                active === "/gdesmo"
                  ? "text-[#ffd400] border-b-2 border-[#ffd400]"
                  : "text-[#004884]"
              } hover:text-[#ffd400]  font-medium cursor-pointer`}
            >
              Где смо?
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
