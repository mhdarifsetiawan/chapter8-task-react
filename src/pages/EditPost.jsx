import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

const EditPost = () => {
  const { postId } = useParams();
  const [values, setValues] = useState({});
  const navigate = useNavigate();
  const [cookies] = useCookies(["accessToken"]);

  useEffect(() => {
    axios
      .get(`https://binar-blog-app.herokuapp.com/posts/${postId}`)
      .then((res) => setValues(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://binar-blog-app.herokuapp.com/posts/${postId}`, values, {
        headers: { Authorization: `Bearer ${cookies.accessToken}` },
      })
      .then((res) => navigate("/dashboard"))
      .catch((err) => {
        alert("something wrong, pelase relogin");
        navigate("/login");
      });
  };

  //   console.log(cookies.accessToken);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="formBody">
          <label for="title">Title : </label>
          <br />
          <input
            id="title"
            name="title"
            type="text"
            value={values.title}
            onChange={handleChange}
          />
        </div>
        <div className="formBody">
          <label for="image">Image : </label>
          <br />
          <input
            id="image"
            name="image"
            type="text"
            value={values.image}
            onChange={handleChange}
          />
        </div>
        <div className="formBody">
          <label for="body">Body : </label>
          <br />
          <textarea
            id="body"
            name="body"
            type="text"
            rows="10"
            cols="50"
            value={values.body}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
