# MERN TODO APP

A full-stack Todo Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Redux for state management.
This application allows users to create, manage, and delete tasks efficiently.

---

# Features

* Add new todos
* Delete todos
* View all todos
* Global state management using Redux
* REST API integration
* MongoDB database storage
* Clean component-based architecture

---

# Tech Stack

Frontend

* React.js
* Redux
* Axios
* CSS

Backend

* Node.js
* Express.js

Database

* MongoDB

Tools

* Git
* GitHub
* Postman

---

# Project Structure

```
TODO-APP
│
├── client
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   │
│   ├── src
│   │   ├── components
│   │   │   ├── Header.jsx
│   │   │   ├── Tabs.jsx
│   │   │   ├── Todo.jsx
│   │   │   ├── TodoForm.jsx
│   │   │   └── Todos.jsx
│   │   │
│   │   ├── redux
│   │   │   ├── actions
│   │   │   │   └── index.js
│   │   │   ├── reducers
│   │   │   │   ├── tabReducer.js
│   │   │   │   └── todosReducer.js
│   │   │   ├── types
│   │   │   └── store.js
│   │   │
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── logo.svg
│   │   ├── reportWebVitals.js
│   │   └── setupTests.js
│
├── server
│   ├── controller
│   │   └── todo-controller.js
│   │
│   ├── database
│   │   └── db.js
│   │
│   ├── model
│   │   └── Todo.js
│   │
│   ├── routes
│   │   └── route.js
│   │
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

---

# Installation

Clone the repository

```
git clone https://github.com/shobhit-736d/ToDo_MERN_App.git
```

---

# Backend Setup

Go to server folder

```
cd server
```

Install dependencies

```
npm install
```

Start the backend server

```
npm start
```

---

# Frontend Setup

Open a new terminal

Go to client folder

```
cd client
```

Install dependencies

```
npm install
```

Run React application

```
npm start
```

---

# Application URLs

Frontend

```
http://localhost:3000
```

Backend API

```
http://localhost:8000
```

---

# API Endpoints

GET /todos
Fetch all todos

POST /todos
Create a new todo

PUT /todos/:id
Update todo

DELETE /todos/:id
Delete todo

---

# Future Improvements

* User authentication
* Task editing feature
* Dark mode
* Task categories
* Deployment

---

# Author

Shobhit Yadav
