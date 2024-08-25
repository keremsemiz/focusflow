import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
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
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <ul>
            <li><Link to="/" className="pill">Dashboard</Link></li>
            <li><Link to="/tasks" className="pill">Task Manager</Link></li>
            <li><Link to="/time-tracker" className="pill">Time Tracker</Link></li>
            <li><Link to="/settings" className="pill">Settings</Link></li>
          </ul>
        </nav>
        <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/time-tracker" element={<TimeTracker />} />
          <Route path="/settings" element={<Settings currentSettings={settings} onSave={updateSettings} />} />
        </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
