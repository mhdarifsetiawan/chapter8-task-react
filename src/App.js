import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import AppLayouts from "./layouts/AppLayouts";
import Blogs from "./pages/Blogs";
import DetailPost from "./pages/DetailPost";
import Login from "./pages/auth/login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Home from "./pages/Home";

const App = () => {
  return (
    <AppLayouts>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:postId" element={<DetailPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/posts/create" element={<CreatePost />} />
        <Route path="/posts/:postId/edit" element={<EditPost />} />
      </Routes>
    </AppLayouts>
  );
};

export default App;
