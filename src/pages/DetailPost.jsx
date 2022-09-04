import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://binar-blog-app.herokuapp.com/posts/${postId}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="container">
        <div className="mtb3">
          <h1 style={{ textTransform: "capitalize" }}>{post.title}</h1>
        </div>
        <div
          className="image ptb3"
          style={{
            backgroundImage: `url(${post.image})`,
            width: "567px",
            height: "350px",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="ptb3">{post.body}</div>
        <div>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailPost;
