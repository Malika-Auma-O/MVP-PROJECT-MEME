# MVP-PROJECT-MEME

Project Name: Memegenie

Project Description: A meme generator app

Installation:
Clone the repository: git clone https://github.com/Malika-Auma-O/MVP-PROJECT-MEME
Navigate to the project directory: cd memegenie
Install dependencies: npm install

Configuration:
Create a .env file in the root directory and set up the following environment variable: MongoDB_URI = <your mongo-db-uri>

Usage:
Start the development server: npm start
Open your browser and navigate to http://localhost:3636

Features:
-Generates random meme images from the Imgflip API: https://api.imgflip.com/get_memes
-Allows users to enter text for the top and bottom of the meme image.
-Provides a button to save the generated memes to the backend.
-Renders saved memes on a separate page.
-Includes a login and logout functionality.

Technologies Used:
Frontend: React, React Router DOM, Axios
Backend: Express, MongoDB Atlas, Mongoose
Other: Bcrypt, CORS, dotenv, JSON Web Token (JWT)

Folder Structure:
src/: Contains the frontend source code.
src/components/: Contains the React components.
backend-server/: Contains the backend source code.
server.js: Entry point for the backend server.
server/modules/: Contains the database models and connection.js file.
server/routes/: Contains the API routes.
controllers/: Contains the controllers for handling the application logic.
