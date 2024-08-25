import React, { useState, useEffect } from 'react';

function TaskManager() {
  const [projects, setProjects] = useState(JSON.parse(localStorage.getItem('projects')) || ['Default Project']);
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [taskName, setTaskName] = useState('');
  const [taskPriority, setTaskPriority] = useState('Low Priority');
  const [taskDeadline, setTaskDeadline] = useState('');
  const [activeTask, setActiveTask] = useState(null);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addProject = (name) => {
    setProjects([...projects, name]);
  };

  const addTask = () => {
    if (taskName.trim() === '') return;
    const newTask = {
      id: Date.now(),
      name: taskName,
      project: selectedProject,
      priority: taskPriority,
      deadline: taskDeadline,
      timeSpent: 0,
    };
    setTasks([...tasks, newTask]);
    setTaskName('');
    setTaskDeadline('');
  };

  const selectTask = (id) => {
    setActiveTask(tasks.find(task => task.id === id));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <div className="task-form">
        <select value={selectedProject} onChange={(e) => setSelectedProject(e.target.value)}>
          {projects.map((project, index) => (
            <option key={index} value={project}>
              {project}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <select value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)}>
          <option value="Low Priority">Low Priority</option>
          <option value="Medium Priority">Medium Priority</option>
          <option value="High Priority">High Priority</option>
        </select>
        <input
          type="date"
          placeholder="Deadline"
          value={taskDeadline}
          onChange={(e) => setTaskDeadline(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-list">
        {tasks
          .filter(task => task.project === selectedProject)
          .map(task => (
            <div key={task.id} className={`task-item ${task.priority.toLowerCase().replace(' ', '-')}`}>
              <span>{task.name}</span>
              <span>{task.deadline}</span>
              <button onClick={() => selectTask(task.id)}>Select</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          ))}
      </div>

      {activeTask && (
        <div className="active-task">
          <h3>Active Task</h3>
          <p>{activeTask.name}</p>
          <p>Time Spent: {activeTask.timeSpent} minutes</p>
        </div>
      )}
    </div>
  );
}

export default TaskManager;
