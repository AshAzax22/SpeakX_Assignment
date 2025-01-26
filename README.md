# SpeakX_Assignment
 Speak X placement Assignment
 A full-stack application for searching throught a questions database in mongodb available at:  (https://speak-x-assignment-six.vercel.app/).

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)

---

## Features

-Search required questions by title.
-Filter questions as per their types.

---

## Technologies Used

- **Frontend:** React
- **Backend:** Node.js, Express, Mongoose
- **Hosting:** Vercel, Render

---

## Installation

### Prerequisites
Ensure you have the following installed on your system:
- Node.js (vX.X.X or higher)
- npm (vX.X.X or higher)

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/SpeakX_Assignment.git
    ```

2. **Navigate to the server directory**:
    ```bash
    cd SpeakX_Assignment/server
    ```

3. **Install the dependencies**:
    ```bash
    npm install
    ```

4. **Set up environment variables**:
    - Create a `.env` file in the server directory.
    - Add the MongoDB URI to the `.env` file. For example:
        ```
        MONGO_URI=your_mongo_uri
        ```

5. **Run database migrations** (if applicable):
    ```bash
    npx knex migrate:latest
    ```

6. **Start the server**:
    ```bash
    npm start
    ```

### Client Setup

1. **Navigate to the client directory**:
    ```bash
    cd ../client
    ```

2. **Install the dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    - Create a `.env` file in the client directory.
    - Add the server API URL to the `.env` file. For example:
        ```
        VITE_API_URL=http://localhost:3000
        ```

4. **Start the development server**:
    ```bash
    npm run dev
    ```
