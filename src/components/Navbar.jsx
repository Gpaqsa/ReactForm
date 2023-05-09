import React from "react";
import "../style/navbar.css";
import LoginForm from "./LoginForm";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="page-list">
          <li className="page">
            <a href="#">Login</a>
          </li>
          <hr className="line" />
          <li className="page">
            <a href="#">Register</a>
          </li>
        </ul>
      </nav>
      <LoginForm />
    </>
  );
};

export default Navbar;
