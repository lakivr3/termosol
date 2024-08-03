import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Prednosti from "./components/Prednosti/Prednosti";
import Contact from "./components/Contact/Contact";
import Galerija from "./components/Galerija/Galerija";
import Footer from "./components/Footer/Footer";
import MyMap from "./components/Maps/Maps";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Prednosti />
      <Galerija />
      <Contact />
    </>
  );
}
