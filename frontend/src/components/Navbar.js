import React, { forwardRef } from "react";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

const Navbar = forwardRef(({ className = "" }, ref) => (
  <div className={`pill-navbar-wrapper ${className}`} ref={ref}>
    <nav className="pill-navbar">
      <HashLink smooth to="/#sobre-denuncia">
        Sobre o denunc.ia
      </HashLink>
      <HashLink smooth to="/#o-que-e-golpe">
        O que é o "Golpe do Presente"?
      </HashLink>
      <HashLink smooth to="/#dicas">
        Dicas
      </HashLink>
    </nav>
  </div>
));

export default Navbar;
