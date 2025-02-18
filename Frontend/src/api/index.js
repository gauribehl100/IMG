import axios from "axios";
// import { generateImage } from "../../../Backend/controllers/GenerateImage";

// http://localhost:8080/api/
const API = axios.create({
  baseURL: "https://img-7777.onrender.com/api/",
});

export const GetPosts = async () => await API.get("/post/");
export const CreatePost = async (data) => await API.post("/post/", data);
export const GenerateImageFromPrompt = async (data) =>
  await API.post("/generateImage/", data);

// generateImage();
