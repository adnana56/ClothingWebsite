# E-Commerce Project

A full-stack e-commerce application built with React (Frontend) and Spring Boot (Backend).

## Project Structure

- **Frontend**: React.js (located in root)
- **Backend**: Spring Boot (located in `backend/`)
- **Database**: MySQL

## Prerequisites

- Node.js & npm
- Java JDK 17+
- Maven
- MySQL Server

## Setup Instructions

### 1. Database Setup
1. Open your MySQL client.
2. Run the script `backend/database_setup.sql` to create the database and tables.

### 2. Backend Setup
1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```
2. Configure your database credentials in `src/main/resources/application.properties` if they differ from the defaults (username: root, password: 1234).
3. Run the application:
   ```sh
   mvn spring-boot:run
   ```
   The backend will start on `http://localhost:8080`.

### 3. Frontend Setup
1. Navigate to the root directory.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm start
   ```
   The frontend will start on `http://localhost:3000`.

## Features
- User Authentication (Login/Signup)
- Product Browsing (Popular, New Collections)
- Shopping Cart
- Responsive Design

> **Note**: This project is configured for local development. Do not expose your database passwords in a public repository without using environment variables or a configuration server.
