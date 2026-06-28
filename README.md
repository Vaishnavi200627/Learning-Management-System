1️⃣ Frontend README.md
Location: StarInfosec Frontend/README.md

markdown
# 🎓 LearnHub - Online Learning Management System (Frontend)

A modern, responsive Learning Management System built with React.js.

## 🚀 Live Demo
[View Live App](https://learning-management-system-ten-self.vercel.app)

## 📸 Screenshots

## 📸 Screenshots

### Home Page
![Home Page](Home.png)

### Courses Page
![Courses Page](Course.png)

### Dashboard
![Dashboard](Dashboard.png)

### Course Management
![Course Management](CourseMangement.png)

### Course Content
![Course Content](CourseContent.png)

### Lesson Management
![Lesson Management](LessonManagement.png)

### Analytics
![Analytics](Analytics.png)

### Settings
![Settings](Setting.png)
## ✨ Features

- 🔐 **User Authentication** – Login/Register with JWT
- 👤 **Role-Based Access** – Student, Instructor, Admin
- 📚 **Course Management** – Create, Read, Update courses
- 📖 **Lesson Management** – Add lessons with YouTube videos
- 📊 **Dashboard** – Track progress and enrolled courses
- ⏰ **Study Tracker** – Set goals, track streaks, reminders
- 🤖 **AI Chatbot** – Learning assistant for students
- 📱 **Fully Responsive** – Works on all devices

## 🛠️ Tech Stack

- **Frontend:** React.js, React Router, React-Bootstrap
- **State Management:** Context API
- **Styling:** Bootstrap 5, Custom CSS
- **Animations:** Framer Motion
- **HTTP Client:** Axios

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Vaishnavi200627/Learning-Management-System-Frontend.git

# Navigate to project folder
cd Learning-Management-System-Frontend

# Install dependencies
npm install

# Create .env file
echo REACT_APP_API_URL=http://localhost:5000/api > .env

# Start development server
npm start
🚀 Deployment
This project is deployed on Vercel.

bash
npm run build
vercel --prod
📁 Project Structure
text
src/
├── Components/      # Reusable components
├── Context/         # Context API for state management
├── Pages/           # Page components
├── Services/        # API services
├── Data/            # Static data
├── App.js           # Main app component
└── index.js         # Entry point
🗂️ State Management
This project uses React's Context API for global state management:

AuthContext – Manages user authentication state

user – Current user data

loading – Authentication loading state

login() – Login function

register() – Registration function

logout() – Logout function

isAuthenticated – Boolean for auth status

🔗 Related Repositories
Backend API

👨‍💻 Author
Vaishnavi Tawade

GitHub: @Vaishnavi200627

📄 License
This project is for internship submission purposes.

text

---

### 2️⃣ Backend README.md
**Location:** `StarInfoSec Backend/README.md`

```markdown
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
├── config/         # Configuration
├── server.js       # Entry point
└── .env.example    # Environment variables template
👨‍💻 Author
Vaishnavi Tawade

GitHub: @Vaishnavi200627

