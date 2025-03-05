import React, { useState, useEffect } from "react";

const Utv = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Load tasks from LocalStorage on first render
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
     setTasks(storedTasks);
  }, []);

  // Save tasks to LocalStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Create Task
  const addTask = () => {

      setTasks([...tasks, task]);
      setTask("");
    
  };

  // Delete Task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Update Task
  const updateTask = (index) => {
    const updatedTask = prompt("Edit Task:", tasks[index]);
    
      
      setTasks(updatedTasks);
    
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>📌 To-Do List (LocalStorage)</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => updateTask(index)}>✏️ Edit</button>
            <button onClick={() => deleteTask(index)}>❌ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Utv;