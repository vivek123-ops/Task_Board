CREATE DATABASE  task_board;

USE task_board;

CREATE TABLE tasks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    status ENUM('todo', 'in-progress', 'done') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);