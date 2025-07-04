# 🎓 Student To-Do List (Full Stack Project)

A full-stack web application to manage student tasks built using **React**, **Spring Boot**, and **MySQL**. Axios is used to connect the frontend and backend via REST APIs.

## ✅ Features

- Add, view, update, and delete student tasks
- React frontend with Axios for API requests
- Spring Boot backend exposing RESTful endpoints
- Data stored in MySQL with JPA support

## 🧰 Tech Stack

- **Frontend:** React, Axios, React Router
- **Backend:** Java, Spring Boot, Spring Data JPA
- **Database:** MySQL

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- Java 17+ and Maven
- MySQL

### Database Setup

Create the database using MySQL CLI or GUI:

```sql
CREATE DATABASE student_todo_db;
```

Or run the included `init.sql`.

### Run the Application

#### Backend
1. Navigate to `student-todo-backend`
2. Update DB credentials in `application.properties`
3. Run: `mvn spring-boot:run`

#### Frontend
1. Navigate to `student-todo-frontend`
2. Run: `npm install && npm start`

## API

- `GET /api/tasks` - List all tasks
- `POST /api/tasks` - Add a new task
- `PUT /api/tasks/{id}` - Update a task
- `DELETE /api/tasks/{id}` - Delete a task

---