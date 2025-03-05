import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, del, toggleComplete } from "../RtkTask/RtkReducer";

const Task = () => {
  const tasks = useSelector((state) => state.TaskManager.data); // Get tasks from Redux
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Handle form submission
  const saveData = (e) => {
    e.preventDefault();
    if (text.trim() === "") return; // Prevent empty tasks

    dispatch(add(text)); // Dispatch add action
    setText(""); // Clear input field
  };

  // Handle task deletion
  const deleteTask = (id) => {
    dispatch(del(id)); // Dispatch delete action
  };

  // Handle task completion toggle
  const markComplete = (id) => {
    dispatch(toggleComplete(id)); // Dispatch toggle complete action
  };

  return (
    <div>
      <form onSubmit={saveData}>
        <label htmlFor="task">Task</label>
        <input 
          type="text" 
          name="task" 
          id="task" 
          onChange={handleChange} 
          value={text} 
          placeholder="Enter task"
        />
        <input type="submit" value="Add Task" />
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ 
            textDecoration: task.completed ? 'line-through' : 'none', 
            color: task.completed ? 'gray' : 'black' 
          }}>
            {task.text}
            <button onClick={() => markComplete(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(task.id)}> Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
