import React from "react";
import "../style/navbar.css";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="page-list">
          <li className="page">
            <Link to="/">
              <a href="#">Login</a>
            </Link>
          </li>
          <hr className="line" />
          <li className="page">
            <Link to="/Register">
              <a href="#">Register</a>
            </Link>
          </li>
        </ul>
      </nav>
      <LoginForm />
    </>
  );
};

export default Navbar;
