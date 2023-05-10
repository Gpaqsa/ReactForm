import React, { useState } from "react";
import "../style/loginForm.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [userData, setUserData] = useState({
    password: "",
    email: "",
  });
  const [submited, setSubmited] = useState(false);
  const [valid, setValid] = useState(false);

  const logInSubmit = (e) => {
    e.preventDefault();

    if (userData.email && userData.password) {
      setValid(true);
    }

    if (userData) {
      setSubmited(true);
    }
  };
  return (
    <div className="loginPage">
      <form className="loginForm" onSubmit={logInSubmit}>
        <div className="">
          <label htmlFor="email">Email</label>
          <input
            className={`${
              submited && !userData.email ? "erorrInputActive" : ""
            }`}
            type="email"
            placeholder="youremail@gmail.com"
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
              console.log(userData.email);
            }}
            value={userData.email}
          />
          {submited && !userData.email ? (
            <span>Please enter your Fullname</span>
          ) : null}
        </div>
        <div className="">
          <label htmlFor="password">Password</label>
          <input
            className={`${
              submited && !userData.password ? "erorrInputActive" : ""
            }`}
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
              console.log(userData.password);
            }}
            value={userData.password}
          />
          {submited && !userData.password ? (
            <span>Please enter your Fullname</span>
          ) : null}
        </div>
      </form>
      <div className="buttons">
        <button className="logBtn" onClick={logInSubmit}>
          Log In
        </button>
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
