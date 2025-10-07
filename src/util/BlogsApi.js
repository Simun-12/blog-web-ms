import axios from "axios";

const API_BASE = "http://localhost:8080/api/blogs"; // adjust if needed

export const getAllBlogs = () => axios.get(`${API_BASE}/blogs`);
export const getBlogsByUser = (userId) => axios.get(`${API_BASE}/blogs/user/${userId}`);
export const createBlog = (blog) => axios.post(`${API_BASE}/blogs`, blog);
export const deleteBlog = (postId) => axios.delete(`${API_BASE}/blogs/${postId}`);