// src/components/BlogList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import "../styles/BlogList.css"; // Import custom dark theme
import DeleteBlog from "./DeleteBlog"; // Import the DeleteBlog component

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/blogs")
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the blogs!", error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">All Blogs</h1>
      <div className="row">
        {blogs.map((blog) => (
          <div key={blog.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  By {blog.author}
                </h6>
                <p className="card-text">{blog.content.substring(0, 1000)}</p>
                <p className="card-text text-muted">
                  <small>
                    Date: {new Date(blog.date).toLocaleDateString()}
                  </small>
                </p>
                <div className="d-flex">
                  <Link
                    to={`/updateBlog/${blog.id}`}
                    className="btn btn-warning me-2"
                  >
                    Update
                  </Link>
                  <DeleteBlog blogId={blog.id} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
