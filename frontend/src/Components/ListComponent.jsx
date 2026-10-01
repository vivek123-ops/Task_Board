import React from "react";

export const ListComponent = ({ task, deleteTask, changeStatus }) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl p-5 mb-4 shadow-sm hover:shadow-md transition duration-200">
      {/* Top Section */}
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <p className="text-xs text-gray-400 mb-1">TASK #{task.id}</p>

          <h2 className="text-xl font-semibold text-gray-800">{task.title}</h2>
        </div>

        {/* Delete Button */}
        <button
          onClick={() => deleteTask(task.id)}
          className="px-4 py-2 text-sm font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition"
        >
          Delete
        </button>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
        {/* Status Select */}
        <div>
          <label className="text-xs font-medium text-gray-500 block mb-2">
            STATUS
          </label>

          <select
            value={task.status}
            onChange={(e) => changeStatus(task.id, e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="todo">Todo</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>

        {/* Status Badge */}
        <span
          className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
            task.status === "done"
              ? "bg-green-100 text-green-700"
              : task.status === "in-progress"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-blue-100 text-blue-700"
          }`}
        >
          {task.status === "in-progress"
            ? "In Progress"
            : task.status === "done"
              ? "Completed"
              : "Todo"}
        </span>
      </div>
    </div>
  );
};
