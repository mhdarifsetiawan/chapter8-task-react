import axios from "axios";
import React from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import regStyle from "../style/regStyle.css";

const Registration = () => {
  const [values, setValues] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://binar-blog-app.herokuapp.com/registration", values)
      .then((res) => navigate("/login"))
      .catch((err) => {
        alert("something wrong!");
        // navigate("/login");
      });
  };

  return (
    <div className="container">
      <h1 className="regTitle">Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="formBody">
          <label for="name">Name</label>
          <br />
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
          ></input>
        </div>
        <div className="formBody">
          <label for="email">Email</label>
          <br />
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
          ></input>
        </div>
        <div className="formBody">
          <label>Password</label>
          <br />
          <input
            name="password"
            type="password"
            onChange={handleChange}
          ></input>
          <br />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
