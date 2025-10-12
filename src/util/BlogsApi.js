import axios from "axios";

const API_BASE = "http://localhost:8080/api/blogs"; // adjust if needed

export const getAllBlogs = () => axios.get(`${API_BASE}/getAllBlogs`);
