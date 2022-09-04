import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({});
  const [cookies, setCookies] = useCookies(["accessToken"]);
  const navigate = useNavigate();

  // console.log(cookies.accessToken);

  useEffect(() => {
    if (cookies.accessToken) {
      return navigate("/dashboard");
    }
  });

  const handleOnChange = (e) => {
    // console.log({ [e.target.name]: e.target.value });
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://binar-blog-app.herokuapp.com/login", values)
      .then((res) => {
        const { accessToken, id, email } = res.data;
        setCookies("accessToken", accessToken, { maxAge: 3600 });
        setCookies("userId", id, { maxAge: 3600 });
        setCookies("email", email, { maxAge: 3600 });
        navigate("/dashboard");
      })
      .catch((err) => {
        alert("Invalid login");
      });
  };

  return (
    <div className="container">
      <div className="form-login">
        <h1>Login Page</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="formBody">
          <lable>Email:</lable>
          <br />
          <input
            name="email"
            onChange={handleOnChange}
            value={values.email}
            type="email"
            // required
          ></input>
        </div>
        <div className="formBody">
          <lable>Password:</lable>
          <br />
          <input
            name="password"
            onChange={handleOnChange}
            type="password"
            // required
          ></input>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
