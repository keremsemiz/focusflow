import React, { useState, useEffect } from 'react';
import '../App.css';

  const TaskManager = () => {
    const { tasks, addTask, editTask, deleteTask } = useContext(AppContext);
    const [newTask, setNewTask] = useState({
      id: Date.now(),
      name: '',
      priority: 'Low',
      dueDate: '',
      timeSpent: 0,
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewTask({ ...newTask, [name]: value });
    };
  
    const handleAddTask = () => {
      addTask(newTask);
      setNewTask({ id: Date.now(), name: '', priority: 'Low', dueDate: '', timeSpent: 0 });
    };
  
    return (
      <div className="task-manager">
        <h2>Task Manager</h2>
        <div className="task-form">
          <input
            type="text"
            name="name"
            placeholder="Enter task name"
            value={newTask.name}
            onChange={handleInputChange}
          />
          <select name="priority" value={newTask.priority} onChange={handleInputChange}>
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
          </select>
          <input
            type="date"
            name="dueDate"
            value={newTask.dueDate}
            onChange={handleInputChange}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
        <ul className="task-list">
          {tasks.map(task => (
            <li key={task.id}>
              <h3>{task.name}</h3>
              <p>Priority: {task.priority}</p>
              <p>Due Date: {task.dueDate}</p>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
              <button onClick={() => editTask({ ...task, name: 'Edited Task Name' })}>
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TaskManager;