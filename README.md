# Task Board

A simple full-stack Task Board application built by me to manage tasks efficiently.

The application allows users to create tasks, view all tasks, update task status, and delete tasks.

## 🚀 Features

- Create a new task
- View all tasks
- Update task status
- Delete tasks
- Task status:
  - Todo
  - In Progress
  - Done
- Tasks are stored permanently in MySQL
- REST API built with Express.js
- Responsive and clean UI
- Instant UI update after adding, deleting, or updating a task

## Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express.js
- REST API
- CORS

### Database

- MySQL

## Project Structure

```text
Task-Board/
│
├── frontend/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── Header.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── ListComponent.jsx
│   │   │   ├── MessageBox.jsx
│   │   │   └── TaskList.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── Controller/
│   │   └── taskController.js
│   │
│   ├── Router/
│   │   └── taskRouter.js
│   │
│   ├── db.js
│   ├── app.js
│   └── package.json
│
├── database/
│   └── schema.sql
│
└── README.md
```
