import React, { useState, useEffect, useRef } from "react";
// 1. Importe o useLocation
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [isPillFixed, setIsPillFixed] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const topBarRef = useRef(null);
  const navbarRef = useRef(null);

  // 2. Obtenha a rota atual
  const location = useLocation();

  // 3. Crie a condição de exibição
  const showNavAndTopBar =
    location.pathname !== "/login" && location.pathname !== "/cadastro";

  // 4. Condicione os useEffects para só rodarem se a navbar for exibida
  useEffect(() => {
    // Só define a altura se a navbar existir
    if (showNavAndTopBar && navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, [showNavAndTopBar]); // Depende da condição

  useEffect(() => {
    const handleScroll = () => {
      const topBarHeight = topBarRef.current
        ? topBarRef.current.offsetHeight
        : 0;
      setIsPillFixed(window.scrollY > topBarHeight);
    };

    // Só adiciona o listener de scroll se a navbar existir
    if (showNavAndTopBar) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [showNavAndTopBar]); // Depende da condição

  return (
    <div className="App">
      {/* 5. Renderize a TopBar e a Navbar apenas se a condição for verdadeira */}
      {showNavAndTopBar && (
        <>
          <TopBar ref={topBarRef} />
          <Navbar ref={navbarRef} className={isPillFixed ? "fixed" : ""} />
          {isPillFixed && <div style={{ height: navbarHeight }} />}
        </>
      )}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;