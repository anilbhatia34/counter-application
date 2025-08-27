import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim() === "") {
      alert("Please enter a task before adding.");
      return;
    }
    setTodos([...todos, { text: task, completed: false }]);
    alert("Task added successfully!");
    setTask("");
  };

  const handleComplete = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <h2>To-Do Application</h2>
      <div className="input-row">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task..."
          className="todo-input"
        />
        <button onClick={handleAdd} className="add-btn">Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, idx) => (
          <li key={idx} className={todo.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleComplete(idx)}
            />
            <span>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
