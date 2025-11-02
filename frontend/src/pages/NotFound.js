import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "100px",
        gap: "20px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <h2 style={{ margin: 0 }}>Oops! Página não encontrada.</h2>
      <p style={{ margin: 0 }}>A página que você está procurando não existe.</p>
      
      <Link
        to="/"
        style={{
          color: "#426192",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        Voltar para a Página Inicial
      </Link>
    </div>
  );
}

export default NotFound;