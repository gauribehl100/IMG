# AI Image Generator

An AI-powered image generator built using the MERN stack and OpenAI API. This application allows users to create unique images based on their prompts, explore them in a dynamic gallery, and download their favorite creations. The project prioritizes user engagement with features like author information and an intuitive user interface.

# Features

1.AI-Powered Image Generation: Generate unique images based on user-provided prompts using the OpenAI API.

2.Interactive UI: Designed with React to ensure a seamless and intuitive user experience.

3.Dynamic Gallery: Real-time display of generated images for users to explore their creations.

4.Download Feature: Easily save generated images to your device.

5.Author Information: Each image displays its creator's details to enhance engagement.

# Tech Stack

Frontend: React

Backend: Node.js, Express.js

Database: MongoDB

API: OpenAI API

# Installation

Follow these steps to run the project locally:

Install dependencies:

**For the backend**
cd Backend
npm install

**For the frontend**
cd Frontend
npm install

Set up environment variables:

Create a .env file in the Backend directory and add the following:

OPENAI_API_KEY=your_openai_api_key
MONGO_URL=your_mongodb_connection_string

Start the application:

**Start the backend server**
cd Backend
npm start

**Start the frontend client**
cd Frontend
npm start

Open your browser and navigate to http://localhost:3000 to use the application.

**Folder Structure**

root
├──Frontend          
│   ├── src
│   │   ├── components  # React components
│   │   ├── pages       # Application pages
│   │  
├── Backend           
│   ├── models         # Mongoose models
│   ├── routes         # API routes
│   └── controllers    # Logic for API endpoints
