import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import passwordValidator from "password-validator";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });
  const passSchema = new passwordValidator();

  //   validation function for password
  const passwordValidate = (value) => {
    passSchema.is().min(8).has().symbols(1).has().digits(1).has().letters(1);

    if (passSchema.validate(value)) {
      setError({ ...error, ["password"]: "" });
      return value;
    } else {
      setError({
        ...error,
        ["password"]:
          "Password should contain atleast one charactor, one number and on special charactor and should be 8 digits long!",
      });
    }
  };

  //   change handle
  const changeHandle = (event) => {
    let data = event.target.value;

    if (event.target.name === "password") {
      setUserData({ ...userData, [event.target.name]: passwordValidate(data) });
    } else {
      setUserData({ ...userData, [event.target.name]: data });
    }
  };

  //   on submit function
  const submitHandle = (e) => {
    e.preventDefault();
    if (userData.email === "") {
      setError({ ...error, ["email"]: "Please write your name!" });
    } else if (userData.password === "") {
      setError({ ["email"]: "", ["password"]: "Please write your password!" });
    } else {
      setError({ ["email"]: "", ["password"]: "" });
      if (
        userData.email === "ani@gmail.com" &&
        userData.password === "aaa@1234"
      ) {
        localStorage.setItem("email", userData.email);
        localStorage.setItem("password", userData.password);
        navigate("/landingPage");
      } else {
        alert("Wrong Email or Password");
      }
    }
  };

  return (
    <div className="loginOuter">
      <form onSubmit={submitHandle}>
        <div className="loginInner">
          <label htmlFor="email" id="email">
            Emil :
          </label>
          <input onChange={changeHandle} id="email" type="email" name="email" />
          {error.email === "" ? null : (
            <p style={{ color: "red" }}>{error.email}</p>
          )}
        </div>

        <div className="loginInner">
          <label htmlFor="password" id="password">
            Password :
          </label>
          <input
            onChange={changeHandle}
            id="password"
            type="text"
            name="password"
          />
          {error.password === "" ? null : (
            <p style={{ color: "red" }}>{error.password}</p>
          )}
        </div>

        <div className="loginInner">
          <button type="submit" className="btn" id="login">
            Login
          </button>
          <button className="btn" id="regester">
            Register
          </button>
          <button className="btn" id="forgotPass">
            Forgot Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
