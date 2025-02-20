"use client";
import { useState, useEffect } from "react";
import NavbarSection from "../navbar/page";
import MobileViewNavbar from "../mobileview/page";

const ResponsiveNavbar = () => {
  const [isMobile, setIsMobile] = useState(false); 

  useEffect(() => {
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile ? <MobileViewNavbar /> : <NavbarSection />;
};

export default ResponsiveNavbar;
