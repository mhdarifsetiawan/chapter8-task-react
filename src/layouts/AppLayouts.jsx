import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";

// Style
import main from "../style/main.css";
import nav from "../style/nav.css";
import spacing from "../style/spacing.css";

const AppLayouts = (props) => {
  const [cookies, setCookies, removeCookie] = useCookies(["userId"]);
  const navigate = useNavigate();

  const logout = () => {
    removeCookie(["accessToken"]);
    removeCookie(["userId"]);
    removeCookie(["email"]);
  };

  return (
    <div className="mainWrapper">
      <header>
        <div className="appTitle">My React App</div>
      </header>
      <nav className="navbar">
        <div className="container">
          <ul className="ptb1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li style={{ display: cookies.accessToken ? "none" : "" }}>
              <Link to="/registration">Registration</Link>
            </li>
            <li style={{ display: cookies.accessToken ? "" : "none" }}>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li style={{ display: cookies.accessToken ? "none" : "" }}>
              <Link to="/login">Login</Link>
            </li>
            <li style={{ display: cookies.accessToken ? "" : "none" }}>
              <Link to="/" onClick={logout}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <section>{props.children}</section>
      <footer>
        <div className="footer ptb3">Footer</div>
      </footer>
    </div>
  );
};

export default AppLayouts;
