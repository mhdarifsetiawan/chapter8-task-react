import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Dashboard = () => {
  const [cookies] = useCookies(["accessToken"]);
  console.log(cookies.userId);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const fetchPosts = () => {
    axios
      .get(
        `https://binar-blog-app.herokuapp.com/posts?writer=${cookies.userId}`
      )
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
      <div className="mb3">
        <h1 className="h1Title ptb3">My Dashboard</h1>
        <div className="container h1Title">
          <button style={{ padding: "7.5px", background: "#ffdba4" }}>
            <Link to="/posts/create" style={{ textDecoration: "none" }}>
              Create New Post
            </Link>
          </button>
        </div>
        <div
          className="h1Title ptb3"
          style={{ display: posts.length < 1 ? "" : "none" }}
        >
          Post not found!
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
                  <div className="p3">
                    <Link to={`/posts/${post.id}/edit`}>Edit</Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
