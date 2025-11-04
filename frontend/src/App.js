import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login"; 
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/login" element={<Login />} />

      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}

export default App;

