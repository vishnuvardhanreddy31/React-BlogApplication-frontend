// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import AddBlog from "./components/AddBlog"; // You'll create this component
import Search from "./components/Search"; // You'll create this component
import UpdateBlog from "./components/UpdateBlog"; // You'll create this component

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/addBlog" element={<AddBlog />} />
          <Route path="/search" element={<Search />} />
          <Route path="/updateBlog/:blogId" element={<UpdateBlog />} />{" "}
          {/* Route for updating blog */}
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
