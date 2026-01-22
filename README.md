# 🎨 Candidate Playground – Fullstack MERN Profile Platform (2025)

Candidate Playground is a fully functional **full-stack MERN application** designed to store, manage, and showcase a candidate’s professional profile through a clean UI and RESTful APIs.

This project focuses on **real-world full-stack development**, covering CRUD operations, search functionality, environment-based configuration, and scalable project architecture.

---

## 🌐 Demo & Repository

- **GitHub Repository:**  
  https://github.com/AnshumAshu/candidate_playground  

- **Live Demo:**  
  _(To be added after deployment)_

---

## 🚀 Features

- ✅ Card-based responsive UI  
- 👤 Create, update, and delete candidate profiles  
- 🔍 Search profiles by **name, education, or skills**  
- 📂 Projects with live website redirection  
- ⚒️ REST APIs built with **Express.js & MongoDB**  
- ⚛️ Clean **React (Vite)** component architecture  
- 🌐 Frontend–backend integration using **Fetch API**  
- ⚙️ Environment-based configuration (dev & prod ready)  
- 🩺 Health-check endpoint for backend monitoring  

---

## 🧰 Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- JavaScript (ES6+)
- Fetch API

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv
- CORS
- Postman (API testing)

### Deployment
- Ready for deployment on **Render / Railway / Vercel**

---

## 🏗 Project Architecture

candidate_playground/
├── client/ # React (Vite) frontend
├── server/ # Express + MongoDB backend
└── README.md # Project documentation


### High-Level Flow

User
↓
React UI (Vite)
↓
REST API (Express)
↓
MongoDB (Mongoose)
↓
JSON Response
↑
UI Update


---

## 📦 Getting Started

### ▶ Install Backend Dependencies

```bash
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

⚙️ Environment Configuration
Backend (server/.env)
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/
⚠️ Notes:

MongoDB password must be URL-encoded

MongoDB Atlas IP whitelist should allow 0.0.0.0/0

Frontend (client/.env)
VITE_API_BASE_URL=http://localhost:5000/api
⚠️ Restart the frontend server after editing environment variables.

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

Method	Endpoint	Description
GET	/profile/health	Health check
POST	/profile	Create profile
GET	/profile	Get all profiles
GET	/profile/:id	Get profile by ID
PUT	/profile/:id	Update profile
DELETE	/profile/:id	Delete profile
GET	/profile/search?q=Node	Search profiles
🧪 Sample cURL Request
curl -X POST http://localhost:5000/api/profile \
-H "Content-Type: application/json" \
-d '{
  "name": "Anshum",
  "education": "B.Tech",
  "skills": ["Node", "React"]
}'
📮 Postman Usage
Base URL:
http://localhost:5000/api

Create requests for:

GET /profile

POST /profile

PUT /profile/:id

DELETE /profile/:id

GET /profile/search

⚠ Known Limitations
No authentication or authorization

Single-user playground design

No pagination for large datasets

Basic input validation only

No rate limiting

🚀 Future Improvements
JWT authentication & role-based access

Pagination & database indexing

Advanced search filters

Debounced search on frontend

CI/CD pipelines

Logging & monitoring

📙 What You’ll Learn
Building real-world MERN stack applications

Designing clean REST APIs

React + Vite project structuring

MongoDB schema design

Frontend–backend integration

Environment-based configuration

Deployment-ready architecture
