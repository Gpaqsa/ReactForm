import React from "react";
import "../style/navbar.css";
// import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="page-list">
          <li className="page">
            <Link to="/">Login</Link>
          </li>
          <hr className="line" />
          <li className="page">
            <Link to="/Register">Register</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
