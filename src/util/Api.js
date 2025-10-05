import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/blogs"; 

export const getAllBlogs = () => axios.get(`${API_BASE_URL}/getAllBlogs`);

