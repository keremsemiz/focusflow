import React, { useState } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskPriority, setTaskPriority] = useState('Low');
  const [taskDeadline, setTaskDeadline] = useState('');

  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      priority: taskPriority,
      deadline: taskDeadline,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskName('');
    setTaskPriority('Low');
    setTaskDeadline('');
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container">
      <h1 className="title">Task Manager</h1>

      <div className="card">
        <h2 className="headline">Add a New Task</h2>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task name"
        />
        <select
          value={taskPriority}
          onChange={(e) => setTaskPriority(e.target.value)}
        >
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>
        <input
          type="date"
          value={taskDeadline}
          onChange={(e) => setTaskDeadline(e.target.value)}
        />
        <button onClick={handleAddTask} className="pill">Add Task</button>
      </div>

      <div className="card">
        <h2 className="headline">Your Tasks</h2>
        <ul className="list">
          {tasks.map(task => (
            <li key={task.id} className={task.completed ? 'completed-task' : ''}>
              {task.name} - <span className="caption">{task.priority} Priority</span> - 
              <span className="caption">Due: {task.deadline}</span>
              <button onClick={() => handleToggleComplete(task.id)} className="pill">
                {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
              </button>
              <button onClick={() => handleDeleteTask(task.id)} className="pill outline">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskManager;
