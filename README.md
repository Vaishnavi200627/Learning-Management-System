# 🎓 LearnHub - LMS Backend API

RESTful API for the Online Learning Management System built with Node.js, Express, and MongoDB.

## 🚀 Live API
[View API Documentation](https://learning-management-system-ihmc.onrender.com)

## ✨ Features

- 🔐 **JWT Authentication** – Secure login/register
- 👤 **Role-Based Access** – Student, Instructor, Admin
- 📚 **Course CRUD** – Create, Read, Update, Delete courses
- 📖 **Lesson Management** – Add lessons to courses
- 📊 **Enrollment System** – Enroll students in courses
- 📈 **Progress Tracking** – Track student progress

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT, bcrypt
- **Validation:** express-validator

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Vaishnavi200627/Learning-Management-System-Backend.git

# Navigate to project folder
cd Learning-Management-System-Backend

# Install dependencies
npm install

# Create .env file (see .env.example)
cp .env.example .env

# Start development server
npm run dev
🔧 Environment Variables
Create a .env file with:

text
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
📁 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user
GET	/api/auth/profile	Get user profile
GET	/api/courses	Get all courses
GET	/api/courses/:id	Get single course
POST	/api/courses	Create course
PUT	/api/courses/:id	Update course
DELETE	/api/courses/:id	Delete course
POST	/api/courses/:id/lessons	Add lesson
POST	/api/enroll	Enroll in course
GET	/api/enroll/my-enrollments	Get enrollments
🚀 Deployment
This API is deployed on Render.

📁 Project Structure
text
├── controllers/    # Business logic
├── models/         # MongoDB schemas
├── routes/         # API routes
├── middleware/     # Auth middleware
├── server.js       # Entry point
└── .env.example    # Environment variables template
👨‍💻 Author
Vaishnavi Tawade

GitHub: @Vaishnavi200627

📄 License
Internship Project
