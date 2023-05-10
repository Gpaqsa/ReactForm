import React, { useState } from "react";
import "../style/loginForm.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  // const [userData, setUserData] = useState({

  // })

  const [logInEmail, setLogInEmail] = useState("");
  const [logInPassword, setLogInPassaword] = useState("");

  const logInSubmit = (e) => {
    e.preventDefault();

    setLogInEmail("");
    setLogInPassaword("");
  };
  return (
    <div className="loginPage">
      <form className="loginForm" onSubmit={logInSubmit}>
        <div className="">
          <label htmlFor="email">Email</label>
          <input
            // className={`${!submited && logInEmail ? "erorrInputActive" : ""}`}
            type="email"
            placeholder="youremail@gmail.com"
            onChange={(e) => {
              setLogInEmail(e.target.value);
              console.log(logInEmail);
            }}
            value={logInEmail}
          />
        </div>
        <div className="">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setLogInPassaword(e.target.value);
              console.log(logInPassword);
            }}
            value={logInPassword}
          />
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
