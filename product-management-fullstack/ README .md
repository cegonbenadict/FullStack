# 🛠️ Product Management System

A full-stack web application built using **React (frontend)**, **Spring Boot (backend)**, and **MySQL (database)**. This application enables users to manage products with full **CRUD** (Create, Read, Update, Delete) operations.

## 🚀 Features

- View a list of products
- Add a new product
- Edit existing product details
- Delete products
- RESTful API integration between frontend and backend using **Axios**
- Persistent data storage in **MySQL**

## 🧰 Tech Stack

- **Frontend:** React, Axios, React Router
- **Backend:** Java, Spring Boot, Spring Data JPA
- **Database:** MySQL

## 🛠️ Getting Started

### ✅ Prerequisites

- Java 17 or higher
- Node.js and npm
- MySQL

### 🔧 Setup Instructions

#### 1. Database Setup (MySQL)

Open your MySQL terminal or GUI tool and run:

```sql
CREATE DATABASE productdb;
```

Or use the provided `init.sql` script.

#### 2. Backend Setup

1. Navigate to the `product-management-backend` folder.
2. Configure your database credentials in `application.properties`.
3. Build and run the Spring Boot application:

```bash
mvn spring-boot:run
```

The backend will start on: `http://localhost:8080`

#### 3. Frontend Setup

1. Navigate to the `product-management-frontend` folder.
2. Install dependencies:

```bash
npm install
```

3. Start the React app:

```bash
npm start
```

The frontend will be available at: `http://localhost:3000`

## 📦 API Integration

- Axios is used in the frontend to send HTTP requests to the backend.
- The base URL for the API is `http://localhost:8080/api/products`.

## 📁 Project Structure

```
product-management-project/
├── product-management-backend/       # Spring Boot API
├── product-management-frontend/      # React frontend using Axios
├── init.sql                          # SQL script to initialize the DB
├── README.md                         # Project documentation
```

---

Feel free to clone, modify, and expand this project as needed!