import React from "react";
import "../style/navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="page-list">
        <li className="page">
          <a href="#">Login</a>
        </li>
        <li className="page">
          <a href="#">Register</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
