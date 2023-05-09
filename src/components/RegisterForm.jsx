import React from "react";
import "../style/registerForm.css";
const RegisterForm = () => {
  return (
    <div className="registerPage">
      <form class="form-detail" action="#">
        <div class="form-row">
          <div className="fullname">
            <div className="name">
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                class="input-text"
                placeholder="Name"
              />
            </div>
            <div>
              <label for="lastname">Lastname</label>
              <input
                type="text"
                name="lastname"
                id="name"
                class="input-text"
                placeholder="Lastname"
              />
            </div>
          </div>
        </div>
        <br />
        <div class="form-row">
          <label for="your-email">Your Email</label>
          <input
            type="text"
            name="your-email"
            id="your-email"
            class="input-text"
            placeholder="Email"
            required=""
            pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
          />
        </div>
        <br />
        <div class="form-row">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            class="input-text"
            placeholder="Password"
            required=""
          />
        </div>
        <br />
        <div class="form-row-last">
          <input
            type="submit"
            name="register"
            class="register"
            value="Register"
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
