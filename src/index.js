import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import article from "./Article";
import App2 from "./App2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App2 article={article} />);
