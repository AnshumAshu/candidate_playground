🎨 Candidate Playground – Fullstack MERN Profile Platform (2025)

This is a fully functional Candidate Playground built with the MERN stack, designed to store, manage, and showcase a candidate’s professional profile using a clean UI and RESTful APIs.

The project focuses on real-world full-stack development, including CRUD operations, search, environment-based configuration, and scalable architecture.

🌐 Demo & Repository

GitHub Repo: https://github.com/AnshumAshu/candidate_playground

Live Demo: (add after deployment)

🚀 Features

✅ Card-based responsive UI

👤 Create, update, delete candidate profiles

🔍 Search profiles by name, education, or skills

📂 Projects with live website redirection

⚒️ REST APIs built with Express.js & MongoDB

⚛️ Clean React (Vite) component architecture

🌐 Frontend–backend integration via Fetch API

⚙️ Environment-based configuration (dev & prod ready)

🩺 Health check endpoint for backend monitoring

🧰 Tech Stack
Frontend

React.js (Vite)

Tailwind CSS

JavaScript (ES6+)

Fetch API

Backend

Node.js

Express.js

MongoDB + Mongoose

dotenv

CORS

Postman (API testing)

Deployment

Ready for deployment on Render / Railway / Vercel

🏗 Project Architecture
candidate_playground/
├── client/        # React (Vite) frontend
├── server/        # Express + MongoDB backend
└── README.md      # Universal documentation

High-Level Flow
User
  ↓
React UI (Vite)
  ↓
REST API (Express)
  ↓
MongoDB (Mongoose)
  ↓
JSON Response → UI

📦 Getting Started
▶ Install Backend Dependencies
cd server
npm install
npm run dev


Backend runs on:

http://localhost:5000

▶ Install Frontend Dependencies
cd client
npm install
npm run dev


Frontend runs on:

http://localhost:5173

⚙ Configure Environment Variables
Backend (server/.env)
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>


⚠️ Notes:

Password must be URL-encoded

MongoDB Atlas IP whitelist must allow 0.0.0.0/0

Frontend (client/.env)
VITE_API_BASE_URL=http://localhost:5000/api


⚠️ Restart frontend server after editing env variables.

🗄 Database Schema (MongoDB)
Profile {
  name: String,
  email: String,
  education: String,
  skills: [String],

  projects: [
    {
      title: String,
      description: String,
      links: [String]
    }
  ],

  work: [
    {
      company: String,
      role: String,
      description: String
    }
  ],

  links: {
    github: String,
    linkedin: String,
    portfolio: String
  }
}

🔌 API Endpoints

Base URL:

http://localhost:5000/api


GET /profile/health – Health check

POST /profile – Create profile

GET /profile – Get all profiles

GET /profile/:id – Get profile by ID

PUT /profile/:id – Update profile

DELETE /profile/:id – Delete profile

GET /profile/search?q=Node – Search profiles

🧪 Sample cURL
curl -X POST http://localhost:5000/api/profile \
-H "Content-Type: application/json" \
-d '{
  "name": "Anshum",
  "education": "B.Tech",
  "skills": ["Node", "React"]
}'

📮 Postman Usage

Base URL: http://localhost:5000/api

Add requests for:

GET /profile

POST /profile

PUT /profile/:id

DELETE /profile/:id

GET /profile/search

⚠ Known Limitations

No authentication / authorization

Single-user playground design

No pagination for large datasets

Basic input validation

No rate limiting

🚀 Future Improvements

JWT authentication & role-based access

Pagination & indexing

Advanced search filters

Debounced search

CI/CD & deployment pipelines

Logging & monitoring
