import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TaskManager from './pages/TaskManager';
import TimeTracker from './pages/TimeTracker';
import Settings from './pages/Settings';
import './App.css';

function App() {
  const defaultSettings = {
    workDuration: 25,
    shortBreak: 5,
    longBreak: 15,
    notifications: true,
    theme: 'light',
  };

  const [tasks, setTasks] = useState([]);
  const [settings, setSettings] = useState(() => {
    const savedSettings = JSON.parse(localStorage.getItem('focusflow-settings'));
    return savedSettings || defaultSettings;
  });

  useEffect(() => {
    document.body.className = settings.theme === 'dark' ? 'dark-theme' : 'light-theme';
  }, [settings.theme]);

  const updateSettings = (newSettings) => {
    setSettings(newSettings);
    localStorage.setItem('focusflow-settings', JSON.stringify(newSettings));
  };

  const updateTaskTime = (id, additionalTime) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, timeSpent: task.timeSpent + additionalTime } : task
      )
    );
  };

  return (
      <div className="app-container">
        <nav className="navbar">
          <ul>
            <li><a href="/" className="pill">Dashboard</a></li>
            <li><a href="/tasks" className="pill">Task Manager</a></li>
            <li><a href="/time-tracker" className="pill">Time Tracker</a></li>
            <li><a href="/settings" className="pill">Settings</a></li>
          </ul>
        </nav>
        <main className="main-content">
          <Router>
            <Route path="/" exact>
              <Dashboard tasks={tasks} />
            </Route>
            <Route path="/tasks">
              <TaskManager tasks={tasks} setTasks={setTasks} />
            </Route>
            <Route path="/time-tracker">
              <TimeTracker tasks={tasks} updateTaskTime={updateTaskTime} />
            </Route>
            <Route path="/settings">
              <Settings defaultSettings={settings} updateSettings={updateSettings} />
            </Route>
          </Router>
        </main>
      </div>
  );
}

export default App;
