import * as dotenv from "dotenv";
import { createError } from "../error.js";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

// Setup OpenAI API configuration
const configuration = new Configuration({
  apiKey: process.env.VITE_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;


    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Invalid or missing 'prompt'" });
    }


    const response = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });


    const generatedImage = response.data.data[0].b64_json;
   return res.status(200).json({ photo: generatedImage });
  } catch (error) {
    console.error("Error generating image:", error.response?.data || error.message);

    next(
      createError(
        error.response?.status || 500,
        error.response?.data?.error?.message || "An error occurred while generating the image."
      )
    );
  }
};



