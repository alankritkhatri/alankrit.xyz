import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Blog from "./blog";
import Home from "./pages/Home/Home";

// const store = createContext()
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
