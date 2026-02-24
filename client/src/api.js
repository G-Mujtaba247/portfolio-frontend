import axios from "axios";

const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
});

// Projects (Public)
export const getAllProjects = () => API.get("/projects");
export const getProjectById = (id) => API.get(`/projects/${id}`);
export const getFeaturedProjects = () => API.get("/projects/featured");

export default API;
