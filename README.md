# 🚀 Full-Stack Authentication App

This project is a **Full-Stack Authentication App** built using:
- **Frontend:** React.js
- **Backend:** Node.js with Express
- **Authentication:** JWT (JSON Web Token)
- **Styling:** CSS

## 📌 Features
- User registration with password hashing (bcrypt)
- User login with JWT authentication
- Persistent login state using `localStorage`
- Dark/Light mode toggle (only available after login)
- User logout functionality

---

## 🛠️ Installation and Setup

### **1️⃣ Backend Setup (Node.js & Express)**
#### **Prerequisites:**
- Install [Node.js](https://nodejs.org/)

#### **Steps to Run Backend:**
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```
4. The server runs on **`http://localhost:5000`**.

#### **Backend Dependencies (Listed in `package.json`):**
- express
- bcrypt
- jsonwebtoken

---

### **2️⃣ Frontend Setup (React.js)**
#### **Prerequisites:**
- Install [Node.js](https://nodejs.org/)
- Install [npm](https://www.npmjs.com/) (comes with Node.js)

#### **Steps to Run Frontend:**
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend application:
   ```bash
   npm start
   ```
4. The React app runs on **`http://localhost:3000`**.

#### **Frontend Dependencies (Listed in `package.json`):**
- react
- react-router-dom

---

## 📜 API Endpoints

| Method | Endpoint    | Description |
|--------|------------|-------------|
| POST   | `/register` | Registers a new user |
| POST   | `/login`    | Logs in a user and returns JWT token |

---

## 🛠️ `.env` Configuration (Optional)
You can use an `.env` file for storing environment variables like the JWT secret key.

---

## 🎯 How It Works
1. **Register a new user** → Redirects to login.
2. **Login** → Stores user info in `localStorage`, shows welcome message & theme toggle.
3. **Logout** → Clears `localStorage`, hides theme toggle.


