import React, { useState } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskPriority, setTaskPriority] = useState('Low');
  const [taskDeadline, setTaskDeadline] = useState('');
  const [taskCategory, setTaskCategory] = useState('General');
  const [filter, setFilter] = useState('All');

  const categories = ['General', 'Work', 'Personal', 'Health', 'Study'];

  const [taskRecurring, setTaskRecurring] = useState(false);

  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      priority: taskPriority,
      deadline: taskDeadline,
      category: taskCategory,
      recurring: taskRecurring,
      timeSpent: 0,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskName('');
    setTaskPriority('Low');
    setTaskDeadline('');
    setTaskCategory('General');
    setTaskRecurring(false);
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
        <select
          value={taskCategory}
          onChange={(e) => setTaskCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <label>
          <input
            type="checkbox"
            checked={taskRecurring}
            onChange={(e) => setTaskRecurring(e.target.checked)}
          />
          Recurring Task
        </label>
        <button onClick={handleAddTask} className="pill">Add Task</button>
      </div>
      <div className="card">
        <h2 className="headline">Filter by Category</h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="card">
        <h2 className="headline">Your Tasks</h2>
        <ul className="list">
          {filteredTasks.map(task => (
            <li key={task.id} className={`${task.completed ? 'completed-task' : ''} ${task.priority.toLowerCase()}-priority ${new Date(task.deadline) < new Date() ? 'overdue-task' : ''}`}>
            {task.name} - <span className="caption">{task.priority} Priority</span> - 
            <span className="caption">Due: {task.deadline}</span> - 
            <span className="caption">Category: {task.category}</span> - 
            {task.recurring && <span className="caption">Recurring</span>}
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
