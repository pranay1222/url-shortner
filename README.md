MERN URL Shortener

A full-stack URL shortening service built with the MERN Stack (MongoDB, Express, React, Node.js). This application allows users to convert long, complex URLs into short, shareable links.

ScreenShots:
<img width="976" height="850" alt="Screenshot (366)" src="https://github.com/user-attachments/assets/3c817fef-0a2b-438b-8c86-96d45d53aad3" />

<img width="966" height="831" alt="Screenshot (367)" src="https://github.com/user-attachments/assets/6695ea41-ec37-4516-98b8-d3c320e6ebf5" />

Tech Stack

Frontend: React (Vite), Tailwind CSS, Axios
Backend: Node.js, Express.js
Database: MongoDB Atlas
Deployment: Vercel (Client), Render (Server)

Features

URL Shortening: Generates unique, short codes for long URLs using nanoid.
Fast Redirection: Server-side redirection ensuring low latency.
Validation: Checks if the input URL is valid before processing.
Responsive UI: Built with Tailwind CSS for mobile and desktop.
Copy to Clipboard: One-click copy functionality for generated links.

Environment Variables

To run this project locally, you will need to add the following environment variables to your .env files.

1. Server (.env)
Create a .env file in the /server folder:

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/urlshortener
BASE_URL=http://localhost:5000

2. Client (.env)
Create a .env file in the /client folder:

VITE_BACKEND_URL=http://localhost:5000


Run Locally

Clone the project

git clone [https://github.com/YOUR_USERNAME/url-shortener.git](https://github.com/YOUR_USERNAME/url-shortener.git)
cd url-shortener


Backend Setup

cd server
npm install
npm start
# Server runs on http://localhost:5000


Frontend Setup

cd client
npm install
npm run dev
# Client runs on http://localhost:5173

👤 Author

Pranay Banait

LinkedIn: [[Your LinkedIn Profile]](https://www.linkedin.com/in/pranay-banait-75939128a/)

GitHub: pranay1222
