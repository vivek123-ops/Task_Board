import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListComponent } from "./ListComponent";

export const TaskList = ({ newTask }) => {
  const [tasks, setTasks] = useState([]);

  // Database se tasks lao
  const getTasks = async () => {
    try {
      const response = await axios.get(
        "https://task-board-xnlt.onrender.com/api/gettask",
      );

      setTasks(response.data);
    } catch (error) {
      console.log("GET TASK ERROR:", error);
    }
  };

  // Page load par database se tasks
  useEffect(() => {
    getTasks();
  }, []);

  // New task immediately show
  useEffect(() => {
    if (newTask) {
      setTasks((prevTasks) => {
        const alreadyExists = prevTasks.some((task) => task.id === newTask.id);

        if (alreadyExists) {
          return prevTasks;
        }

        return [newTask, ...prevTasks];
      });
    }
  }, [newTask]);

  // DELETE
  const deleteTask = async (id) => {
    try {
      const response = await axios.delete(
        `https://task-board-xnlt.onrender.com/api/delete/${id}`,
      );

      console.log(response.data);

      // UI se immediately remove
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log("DELETE ERROR:", error);
    }
  };

  // UPDATE STATUS
  const changeStatus = async (id, newStatus) => {
    try {
      const response = await axios.patch(
        `https://task-board-xnlt.onrender.com/api/update/${id}`,
        {
          status: newStatus,
        },
      );

      console.log(response.data);

      // UI mein immediately update
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, status: newStatus } : task,
        ),
      );
    } catch (error) {
      console.log("UPDATE ERROR:", error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-5">My Tasks</h1>
      {tasks.length === 0 ? (
        <div className="w-full min-h-[300px] flex flex-col justify-center items-center border border-dashed border-gray-300 rounded-2xl bg-white">
          <h2 className="text-2xl font-semibold text-gray-600">No Tasks</h2>

          <p className="text-gray-400 mt-2">You haven't added any task yet.</p>
        </div>
      ) : (
        tasks.map((task) => (
          <ListComponent
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            changeStatus={changeStatus}
          />
        ))
      )}
    </div>
  );
};
