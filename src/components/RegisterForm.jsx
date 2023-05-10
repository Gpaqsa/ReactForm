import React from "react";
import "../style/registerForm.css";
const RegisterForm = () => {
  return (
    <div className="registerPage">
      <form className="form-detail" action="#">
        <div className="form-row">
          <div className="fullname">
            <div className="name">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="input-text"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="lastname">Lastname</label>
              <input
                type="text"
                name="lastname"
                id="name"
                className="input-text"
                placeholder="Lastname"
              />
            </div>
          </div>
        </div>
        <br />
        <div className="form-row">
          <label htmlFor="your-email">Email</label>
          <input
            type="text"
            name="your-email"
            id="your-email"
            className="input-text"
            placeholder="Email"
            required=""
            pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
          />
        </div>
        <br />
        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="input-text"
            placeholder="Password"
            required=""
          />
        </div>
        <br />
        <div className="form-row-last">
          <input
            type="submit"
            name="register"
            className="register"
            value="Register"
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
