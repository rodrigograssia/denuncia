import React from "react";
import "../styles/Home.css"; 

import SecaoSobre from "../components/SecaoSobre";
import SecaoGolpe from "../components/SecaoGolpe";
import SecaoDicas from "../components/SecaoDicas";

function Home() {
  return (
    <div className="home-container">
      <SecaoSobre />
      <SecaoGolpe />
      <SecaoDicas />
    </div>
  );
}

export default Home;