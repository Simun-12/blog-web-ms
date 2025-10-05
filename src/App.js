import React, { useEffect, useState } from "react";
import { getAllBlogs } from "./util/Api";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await getAllBlogs();
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  return (
    <div className="blog-container">
      <h1 className="blog-header">Meow 😼</h1>

      {blogs.length === 0 ? (
        <p>No blogs yet. Start writing!</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.postId} className="blog-card">
            <div className="blog-title">{blog.title}</div>
            <div className="blog-content">
              {blog.content || "No content available"}
            </div>
            <div className="blog-meta">Written by Unknown • Just now</div>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
