# Task Board

Task Board is a full-stack task management web application that allows users to create, view, update, and delete tasks.

## 🚀 Live Demo

👉 https://task-board-hcvns95qz-vivekshrivastav325-1750s-projects.vercel.app/

## ✨ Features

- Add a new task
- View all tasks
- Update task status
- Delete a task
- Store tasks in MySQL database
- Display a message after creating a task
- Display "No Tasks" when there are no tasks
- Responsive user interface

## 🛠️ Technologies Used

### Frontend

- React.js
- Vite
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express.js
- CORS
- Concurrently

### Database

- MySQL

### Deployment

- Vercel - Frontend
- Render - Backend
- Aiven - MySQL Database

## 🔗 API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/gettask` | Get all tasks |
| POST | `/api/addtask` | Add a new task |
| PATCH | `/api/update/:id` | Update task status |
| DELETE | `/api/delete/:id` | Delete a task |

## 💻 Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/vivek123-ops/Task_Board.git
cd Task_Board
```

### 2. Install Dependencies

Install all project dependencies:

```bash
npm install
```

### 3. Setup MySQL Database

Create the database and tasks table using:

```text
database/schema.sql
```

### 4. Setup Environment Variables

Create a `.env` file inside the `backend` folder.

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=task_board
```

Do not share or commit your `.env` file.

### 5. Run the Project

Run the frontend and backend together:

```bash
npm run dev
```

### 6. Open the Application

Open:

```text
http://localhost:5173
```

## 📁 Project Structure

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
│   ├── config
│   │   └── db.js
│   │
│   ├── app.js
│   └── package.json
│
├── database
│   └── schema.sql
│
├── README.md
└── .gitignore
```

## 👨‍💻 Author

Vivek Shrivastav
