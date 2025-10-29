import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import MainLayout from "./components/MainLayout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          {/*Rotas que NÃO têm Navbar*/}
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />

          {/*Rotas que TÊM Navbar*/}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;