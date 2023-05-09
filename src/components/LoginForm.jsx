import React from "react";
import "../style/loginForm.css";
import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <div className="loginPage">
      <form className="loginForm">
        <div className="">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="youremail@gmail.com" />
        </div>
        <div className="">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" />
        </div>
      </form>
      <div className="buttons">
        <button className="logBtn">Log In</button>
        <div className="pageButons">
          <button>Forget Password</button>
          <button>
            <Link to="/Register" className="registerBtn">
              Register
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
