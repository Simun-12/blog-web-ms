import React, { useEffect, useState } from "react";
import { getAllBlogs } from "./util/BlogsApi";
import Navbar from "./components/Navbar"
import "./App.css";
import LandingPage from "./pages/LandingPage";

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
    <div>
     
      <div> <LandingPage/> </div>
    </div>
   
  );
}

export default App;
