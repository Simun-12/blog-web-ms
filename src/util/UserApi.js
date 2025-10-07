import axios from "axios";

const API_BASE = "http://localhost:8080/api/users";


export const getUser = (userId) => axios.get(`${API_BASE}/getUser/${userId}`);

