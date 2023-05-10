import React, { useState } from "react";
import "../style/registerForm.css";
const RegisterForm = () => {
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [submited, setSubmited] = useState(false);
  const [valid, setValid] = useState(false);

  const handleRegSubmit = (event) => {
    event.preventDefault();

    if (values.name && values.lastname && values.email && values.password) {
      setValid(true);
    }

    if (values) {
      setSubmited(true);
    }
  };

  return (
    <div className="registerPage">
      <form className="form-detail" action="#" onSubmit={handleRegSubmit}>
        <div className="form-row">
          <div className="fullname">
            <div className="name">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className={`"input-text" ${
                  submited && !values.name ? "erorrInputActive" : ""
                }`}
                placeholder="Name"
                value={values.name}
                onChange={(e) => {
                  setValues({ ...values, name: e.target.value });
                }}
              />
              {submited && !values.name ? (
                <span className="nameSpan">Please enter your firstname</span>
              ) : null}
            </div>
            <div>
              <label htmlFor="lastname">Lastname</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                className={`"input-text" ${
                  submited && !values.lastname ? "erorrInputActive" : ""
                }`}
                placeholder="Lastname"
                value={values.lastname}
                onChange={(e) => {
                  setValues({ ...values, lastname: e.target.value });
                }}
              />
              {submited && !values.lastname ? (
                <span className="lastnameSpan">Please enter your lastname</span>
              ) : null}
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
            // className="input-text"
            className={`"input-text" ${
              submited && !values.email ? "erorrInputActive" : ""
            }`}
            placeholder="Email"
            // required=""
            pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
            value={values.email}
            onChange={(e) => {
              setValues({ ...values, email: e.target.value });
            }}
          />
          {submited && !values.email ? (
            <span>Please enter your email</span>
          ) : null}
        </div>
        <br />
        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className={`"input-text" ${
              submited && !values.password ? "erorrInputActive" : ""
            }`}
            placeholder="Password"
            required=""
            value={values.password}
            onChange={(e) => {
              setValues({ ...values, password: e.target.value });
            }}
          />
          {submited && !values.password ? (
            <span>Please enter your password</span>
          ) : null}
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
