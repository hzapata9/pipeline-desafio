# Task API Project

This project demonstrates a simple Node.js API for managing tasks, integrated with Docker for containerization and Jenkins for CI/CD pipeline.

## Features

- List all tasks  
- Get task by ID

## Running Locally

1. Install dependencies: `npm install`  
2. Start the server: `npm start`

## Running with Docker

1. Build the image: `docker build -t task-api .`  
2. Run the container: `docker run -p 3000:3000 task-api`

