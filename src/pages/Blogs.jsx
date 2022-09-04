import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../style/blog.css";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const fetchPosts = () => {
    axios
      .get("https://binar-blog-app.herokuapp.com/posts")
      .then((res) => {
        const listPosts = res.data;
        setPosts(listPosts);
      })
      .catch((err) => console.error(err));
  };

  const handleClick = (id) => {
    navigate(`/blogs/${id}`);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div>
        <h1 className="h1Title ptb3">My Blog</h1>
      </div>
      <div className="boxWrapper">
        {posts
          .sort((a, b) => b.id - a.id)
          .map((post) => {
            return (
              <div key={post.id} className="boxStyle">
                <div className="imageArticle">
                  <div
                    className="image"
                    style={{
                      backgroundImage: `url(${post.image})`,
                    }}
                  ></div>
                </div>
                <div className="postMeta">
                  <Link to="/" className="category">
                    {(post.category = "Category")}
                  </Link>
                </div>
                <h3 className="title">
                  <a href={`/blogs/${post.id}`}>{post.title}</a>
                </h3>
                <div className="body-posts p3">
                  <p>{post.body}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Blogs;
