// src/components/Search.js
import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import "../styles/BlogList.css"; // Import custom dark theme

function Search() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:8080/search/${keyword}`)
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => {
        console.error("There was an error searching for blogs!", error);
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Search Blogs</h1>
      <form onSubmit={handleSearch}>
        <div className="form-group mb-4">
          <label htmlFor="keyword">Keyword</label>
          <input
            type="text"
            className="form-control"
            id="keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
      <div className="mt-4">
        {results.length > 0 ? (
          <div className="row">
            {results.map((blog) => (
              <div key={blog.id} className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      By {blog.author}
                    </h6>
                    <p className="card-text">
                      {blog.content.substring(0, 1000)}
                    </p>
                    <p className="card-text text-muted">
                      <small>
                        Date: {new Date(blog.date).toLocaleDateString()}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No blogs found.</p>
        )}
      </div>
    </div>
  );
}

export default Search;
