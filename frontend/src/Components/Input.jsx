import React, { useState } from "react";
import axios from "axios";

export const Input = ({ setMessage, setNewTask }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo");

  const handleTask = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/addtask", {
        title,
        status,
      });

      console.log(response.data);

      // Success message Messa32geBox ko bhejo
      setMessage(response.data.message);
      setNewTask({
        id: response.data.taskId,
        title: title,
        status: status,
      });

      setTitle("");
      setStatus("todo");
    } catch (error) {
      console.log(error);
      setMessage(error.response?.data?.message || "Task create failed");
    }
  };

  return (
    <div className="w-[90%] h-[60vh] border rounded-2xl ml-3.5">
      <h1 className="text-3xl p-5 font-medium">Add new task</h1>

      <div className="w-full h-[30vh] p-4">
        <label className="text-2xl block mb-2">Task title</label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your title"
          className="w-full border border-gray-400 p-2 rounded"
        />

        <label className="text-2xl block mb-2 mt-2">Status</label>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border border-gray-400 rounded-md p-3"
        >
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <button
        onClick={handleTask}
        className="w-[90%] h-15 border rounded-2xl mt-5 ml-4 text-lg font-medium"
      >
        Add task
      </button>
    </div>
  );
};
