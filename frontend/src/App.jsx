import React, { useState } from "react";
import { Header } from "./Components/Header";
import { Input } from "./Components/Input";
import { MessageBox } from "./Components/MessageBox";
import { TaskList } from "./Components/TaskList";

const App = () => {
  const [message, setMessage] = useState("");
  const [newTask, setNewTask] = useState(null);

  return (
    <div className="w-full min-h-screen bg-amber-50">
      <Header />

      {/* Main content */}
      <div className="flex">
        {/* LEFT SIDE */}
        <div className="min-h-screen w-1/4 border p-3 py-6.5">
          <Input setMessage={setMessage} setNewTask={setNewTask} />
          <MessageBox message={message} />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-3/4 min-h-screen border-l p-5">
          <TaskList newTask={newTask} />
        </div>
      </div>
    </div>
  );
};

export default App;
