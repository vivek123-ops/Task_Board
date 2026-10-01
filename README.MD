# Task Board

Task Board is a full-stack web application that I built for managing tasks.

Using this application, users can create a task, view all tasks, change the task status, and delete a task.

The frontend is built with React and Tailwind CSS, the backend is built with Node.js and Express.js, and MySQL is used to store the task data.

## Features

- Add a new task
- View all tasks
- Change task status
- Delete a task
- Store tasks in MySQL database
- Display a message after creating a task
- Display "No Tasks" when there are no tasks
- Responsive user interface

## Technologies Used

### Frontend

- React.js
- Vite
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express.js
- CORS

### Database

- MySQL

## Project Structure

```text
Task-Board
│
├── frontend
│   ├── src
│   │   ├── Components
│   │   │   ├── Header.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── MessageBox.jsx
│   │   │   ├── TaskList.jsx
│   │   │   └── ListComponent.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend
│   ├── Controller
│   │   └── taskController.js
│   │
│   ├── Router
│   │   └── taskRouter.js
│   │
│   ├── db.js
│   ├── app.js
│   └── package.json
│
├── database
│   └── schema.sql
│
├── README.md
└── .gitignore
```
