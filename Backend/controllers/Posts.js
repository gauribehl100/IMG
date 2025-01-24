import * as dotenv from "dotenv";
import Posts from "../models/Posts.js";
import { createError } from "../error.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET  // Click 'View API Keys' above to copy your API secret
});

export const getAllPosts = async (req, res, next) => {
    try {
      const posts = await Posts.find({});
      return res.status(200).json({ success: true, data: posts });
    } catch (error) {
      return next(
        createError(
          error.status||500,
          error?.response?.data?.error.message || error.message
        )
      );
    }
  };
  
  // Create new post
  export const createPost = async (req, res, next) => {
    try {
      const { name, prompt, photo } = req.body;
      const photoUrl = await cloudinary.uploader.upload(photo);
      const newPost = await Posts.create({
        name,
        prompt,
        photo: photoUrl.secure_url,
      });
  
      return res.status(200).json({ success: true, data: newPost });
    } catch (error) {
      console.log(error);
      return next(
        createError(error.status, error?.response?.data?.error.message)
      );
    }
  };