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
