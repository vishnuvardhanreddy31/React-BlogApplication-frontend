// src/components/UpdateBlog.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState("");

  const { blogId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the existing blog details
    axios
      .get(`http://localhost:8080/blog/${blogId}`)
      .then((response) => {
        const blog = response.data;
        setId(blog.id);
        setTitle(blog.title);
        setContent(blog.content);
        setAuthor(blog.author);
        setDate(blog.date);
      })
      .catch((error) => {
        console.error("There was an error fetching the blog!", error);
      });
  }, [blogId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBlog = {
      id: id,
      title: title,
      content: content,
      author: author,
      date: date,
    };

    axios
      .put("http://localhost:8080/updateBlog", updatedBlog)
      .then((response) => {
        alert("Blog updated successfully!");
        navigate("/blogs"); // Navigate to the blogs page after update
      })
      .catch((error) => {
        console.error("There was an error updating the blog!", error);
      });
  };

  return (
    <div>
      <h1>Update Blog</h1>
      <form onSubmit={handleSubmit}>
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
          Update Blog
        </button>
      </form>
    </div>
  );
}

export default UpdateBlog;
