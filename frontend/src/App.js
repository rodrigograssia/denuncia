import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Denuncia from "./pages/Denuncia";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";

import NotFound from "./pages/NotFound"; 

import "./App.css";

function App() {
  const location = useLocation();
  const path = location.pathname;

  const showTopBar = path !== "/login" && path !== "/cadastro";
  const showNavbar = path === "/";

  return (
    <div className="App">
      
      {showTopBar && (
        <TopBar />
      )}
      
      {showNavbar && (
        <Navbar />
      )}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/denuncia" element={<Denuncia />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;