const express = require("express");
const task = express.Router();
const taskController = require("../Controller/taskController");

task.get("/gettask", taskController.getTasks);
task.post("/addtask", taskController.addtask);
task.delete("/delete/:id", taskController.deletetask);
task.patch("/update/:id", taskController.updatetask);

module.exports = task;
