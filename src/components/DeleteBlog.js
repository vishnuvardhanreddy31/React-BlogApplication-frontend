// src/components/DeleteBlog.js
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DeleteBlog({ blogId }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/deleteBlog/${blogId}`)
      .then((response) => {
        alert("Blog deleted successfully!");
        navigate("/addBlog"); // Navigate to the blogs page after deletion
      })
      .catch((error) => {
        console.error("There was an error deleting the blog!", error);
      });
  };

  return (
    <button className="btn btn-danger" onClick={handleDelete}>
      Delete Blog
    </button>
  );
}

export default DeleteBlog;
