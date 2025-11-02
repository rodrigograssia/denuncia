import React, { useState, useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";
import "./TopBar.css";

const TopBar = forwardRef((props, ref) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  useEffect(() => {
    if (!showDropdown) return;
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".profile-link") &&
        !event.target.closest(".profile-dropdown")
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div className="top-bar" ref={ref}>
      <div className="top-bar-logo">
        <Link to="/">denunc.ia</Link>
      </div>
      <ul className="top-bar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/denuncia">Denunciar Golpe</Link>
        </li>
        <li
          className="profile-link"
          onClick={toggleDropdown}
          style={{ cursor: "pointer", position: "relative" }}
        >
          <span className="profile-icon">
            <img
              width="25rem"
              src="/images/user-svgrepo-com.svg"
              alt="Perfil"
            />
          </span>
          {showDropdown && (
            <div className="profile-dropdown">
              <Link
                to="/login"
                className="dropdown-btn"
                style={{ textDecoration: "none" }}
              >
                Login
              </Link>
              <Link
                to="/cadastro"
                className="dropdown-btn"
                style={{ textDecoration: "none" }}
              >
                Cadastro
              </Link>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
});

export default TopBar;
