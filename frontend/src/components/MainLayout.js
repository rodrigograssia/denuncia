import React, { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

function MainLayout() {
  const [isPillFixed, setIsPillFixed] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const topBarRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const topBarHeight = topBarRef.current
        ? topBarRef.current.offsetHeight
        : 0;
      setIsPillFixed(window.scrollY > topBarHeight);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <TopBar ref={topBarRef} />
      <Navbar ref={navbarRef} className={isPillFixed ? "fixed" : ""} />
      {isPillFixed && <div style={{ height: navbarHeight }} />}

      <Outlet /> 
    </>
  );
}

export default MainLayout;