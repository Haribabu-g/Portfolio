import React, { useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import { SmoothCursor } from "/src/components/ui/smooth-cursor";
import { ScrollProgress } from "/src/components/magicui/scroll-progress";
import Footer from "./sections/Footer";

const App = () => {
  const [showCursor, setShowCursor] = useState(false);
 

useEffect(() => {
  const isMobile = window.innerWidth < 640; // Tailwind's sm breakpoint
  const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!isMobile && !shouldReduceMotion) {
    setShowCursor(true);
  }
}, []);


  return (
    <>
      {showCursor && (
        <div className="hidden sm:block">
          <SmoothCursor />
        </div>
      )}

      <div className="container mx-auto max-w-7xl">
        <Navbar />
        <ScrollProgress className="top-[40px]" />
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;