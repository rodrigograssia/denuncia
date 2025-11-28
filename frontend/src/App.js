import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Denuncia from "./pages/Denuncia";
import Verificacao from "./pages/Verificacao";
import EsqueciSenha from "./pages/EsqueciSenha";
import ResetPassword from "./pages/ResetPassword";
import MinhasDenuncias from "./pages/MinhasDenuncias";
import Dados from "./pages/Dados";
import Gerenciamento from "./pages/Gerenciamento";

function App() {
  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/denuncia" element={<Denuncia />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/verificacao" element={<Verificacao />} />
        <Route path="/esqueci-senha" element={<EsqueciSenha />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/minhas-denuncias" element={<MinhasDenuncias />} />
        <Route path="/dados" element={<Dados />} />
        <Route path="/gerenciamento" element={<Gerenciamento />} />
      </Routes>
  );
}

export default App;

