import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Blog from "./blog";
import Home from "./pages/Home/Home";
import { createContext, useContext } from "react";
useContext

const store = createContext()
const App = () => {
  return (
    <div className="main">
 

      <Router>
        <Link to="/">
          <div className="logo">
            <h1>Alankrit OS</h1>
            <span>v1.0</span>
          </div>
        </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
