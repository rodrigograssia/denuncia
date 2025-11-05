import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login"; 
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}

export default App;

