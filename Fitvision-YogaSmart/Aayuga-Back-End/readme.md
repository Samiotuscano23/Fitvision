# Aayuga

## Overview

Welcome to our dynamic MERN (MongoDB, Express.js, React, Node.js) application, a project built with a focus on secure user authentication, AI-driven user interaction, and advanced pose detection capabilities. This README file will guide you through the features, setup, and technologies used in our application.

## Features

- **Pose Detection:** Integrated pose detection for real-time body movement analysis.

- **Accuracy Measurements:** Accurate measurement of user poses for fitness and physical therapy applications.

- **Backend Development:** Utilizing Express.js for robust server-side architecture.

- **Security Enhancements:** Implemented advanced password hashing with bcrypt.

- **User Authentication:** Secure user authentication using JSON Web Tokens (JWT).

- **AI Chatbot Integration:** Integrated ChatGPT API for enhanced user interaction.

## Technologies Used

- **MongoDB:** NoSQL database for storing user data and application information.

- **Express.js:** Backend framework for building RESTful APIs and handling server-side logic.

- **React:** Frontend library for building interactive and dynamic user interfaces.

- **Node.js:** JavaScript runtime for server-side development.

- **bcrypt:** Library for hashing passwords to enhance security.

- **JSON Web Tokens (JWT):** Standard for secure user authentication.

- **ChatGPT API:** OpenAI’s API for incorporating AI chatbot functionality.

- **Pose Detection API:** API for detecting and analyzing body poses in real-time.

## Repositories

- **Frontend Repository:** [FrontEnd-Repo](https://github.com/PDhvanik/Aayuga-Front-End)

- **Backend Repository:** [BackEnd-Repo](https://github.com/PDhvanik/Aayuga-Back-End)

## Project Milestones

- **Pose Detection Integration:** Implemented pose detection for real-time analysis and accuracy measurements.

- **Backend Development:** Focused on setting up Express.js server and defining API routes.

- **Security Implementation:** Added password hashing with bcrypt and JWT-based authentication.

- **AI Integration:** Developed a chatbot using ChatGPT API to enrich user interactions.

- **Frontend Integration:** Combined React frontend with Express.js backend to create a cohesive user experience.

## Installation and Setup

### Backend Setup

1. **Clone the backend repository:**

   ```bash
   git clone https://github.com/PDhvanik/Aayuga-Back-End.git
   cd Aayuga-Back-End
   ```

2. **Set up environment variables:**

   **Create a .env file in the backend directory and add the following:**

   ```Plain Text
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   CHATGPT_API_KEY=your_openai_api_key
   PORT=your_port
   ```

3. **Install dependencies and Start server:**

   ```bash
   npm install
   npm run dev
   ```

### Frontend Setup

1. **Clone the frontend repository:**

   ```bash
   git clone https://github.com/PDhvanik/Aayuga-Front-End.git
   cd Aayuga-Front-End
   ```

2. **Setup proxy server**

   **Add this code to vite.config file:**

   ```Plain Text
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   // https://vitejs.dev/config/
   export default defineConfig({
      server: {
         proxy: {
            '/api': 'http://localhost:8080'
         }
      },
      //Other configuration as per requirements
   });
   ```

3. **Update URL.js File**

   ```Plain Text
   export default const URL = '';
   ```

4. **Install dependencies and Start Server**

   ```bash
   npm install
   npm run dev
   ```

## Access the Application

Open your browser and navigate to http://localhost:5173 to view the application. In further case backend server setup is possible through .env file.

## Usage

- **User Registration and Login**: Securely register and log in users using JWT authentication.

- **AI Chatbot**: Interact with the integrated AI chatbot for an enhanced user experience.

- **Pose Detection**: Use the pose detection feature for real-time analysis of body movements.

- **Accuracy Measurements**: Obtain accurate measurements of poses for applications in fitness and physical therapy.

## Contributing

We welcome contributions to improve our project. Feel free to submit issues and pull requests to the respective repositories.

## Authors

- [Dhvanik Patel](https://github.com/PDhvanik) - Backend Development, Pose detection using tensorflow and ChatBot using OpenAI API

- [Dev Patel](https://github.com/White-Devil04) - Frontend UI Development

## License

This project is licensed under the MIT License - see the LICENSE file in the respective repositories for details.

## Acknowledgments

- Special thanks to the OpenAI team for the ChatGPT API.

- Gratitude to the LinkedIn community for support and feedback.
