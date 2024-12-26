import React from "react";

function TaskItem({ task }) {
  return (
    <div
      style={{
        margin: "10px 0",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        textAlign: "left",
      }}
    >
      <h4>{task.title}</h4>
      <p>Status: {task.completed ? "Completed" : "Pending"}</p>
    </div>
  );
}

export default TaskItem;
