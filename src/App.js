import React, { useState } from "react";
import TaskList from "./Components/TaskList";



function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build a project", completed: false },
  ]);

  const addTask = () => {
    const newTask = { id: tasks.length + 1, title: `Task ${tasks.length + 1}`, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Task Manager</h1>
      <button onClick={addTask} style={{ margin: "10px", padding: "10px", fontSize: "16px" }}>
        Add Task
      </button>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
