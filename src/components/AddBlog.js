import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the blog object
    const newBlog = {
      id: id, // Ensure id is included
      title: title,
      content: content,
      author: author,
      date: date, // Ensure date is included
    };

    axios
      .post("http://localhost:8080/addBlog", newBlog)
      .then((response) => {
        alert("Blog added successfully!");
        navigate("/blogs"); // Redirect to the blogs page
        setTitle("");
        setContent("");
        setAuthor("");
        setDate("");
        setId(""); // Clear ID field
      })
      .catch((error) => {
        console.error("There was an error adding the blog!", error);
      });
  };

  return (
    <div>
      <h1>Add a New Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input
            type="number"
            className="form-control"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            className="form-control"
            id="content"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add Blog
        </button>
      </form>
    </div>
  );
}

export default AddBlog;
