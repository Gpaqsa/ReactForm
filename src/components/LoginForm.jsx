import React from "react";
import "../style/loginForm.css";
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
          <button>Register</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
