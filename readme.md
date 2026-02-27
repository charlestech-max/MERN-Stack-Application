
# MERN Stack Application Overview
This is a MERN stack application that consists of a MongoDB database, an Express.js server, a React frontend, and Node.js as the runtime environment. This project demonstrates the full-stack capabilities of the MERN stack.

## Features
RESTful API built with Express.js
MongoDB for data storage
React frontend for a dynamic user interface
Getting Started
Prerequisites
Docker installed on your machines
Basic understanding of Docker commands
Project Structure
/mern-app
│
├── /backend              # Node.js and Express server
│   ├── Dockerfile        # Dockerfile for the backend
│   ├── package.json      # Node.js dependencies
│   └── server.js         # Main server file
│
└── /frontend             # React application
    ├── package.json      # React dependencies
    └── src               # Source files for React

Running the Project with Docker
Clone the Repository
git clone <repo-url>
cd mern-app/backend

## Build and Start the Containers

Use Docker Compose to build and run your containers:
sudo docker-compose up --build
This command will:

Build the Docker images for your application.
Start the MongoDB container and your Node.js application.
Run the Frontend

Open a new terminal, navigate to the frontend directory, and start the React application:
cd ../frontend
npm start

## Access the Application

The backend API will be available at http://localhost:3000.
The React frontend will be accessible at http://localhost:3000 (or another port if specified).
Stopping the Containers

To stop the running containers, use:
sudo docker-compose down
Notes
Ensure your MONGO_URI environment variable is set correctly in the docker-compose.yml file.
You can add any additional instructions or features specific to your project.
