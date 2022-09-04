import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const CreatePost = () => {
  const [values, setValues] = useState({});
  const navigate = useNavigate();
  const [cookies] = useCookies(["accessToken"]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://binar-blog-app.herokuapp.com/posts", values, {
        headers: { Authorization: `Bearer ${cookies.accessToken}` },
      })
      .then((res) => navigate("/dashboard"))
      .catch((err) => {
        alert("something wrong, pelase relogin");
        navigate("/login");
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="formBody">
          <label for="title">Title : </label>
          <br />
          <input id="title" name="title" type="text" onChange={handleChange} />
        </div>
        <div className="formBody">
          <label for="image">Image : </label>
          <br />
          <input id="image" name="image" type="text" onChange={handleChange} />
        </div>
        <div className="formBody">
          <label for="body">Body : </label>
          <br />
          <input id="body" name="body" type="text" onChange={handleChange} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
