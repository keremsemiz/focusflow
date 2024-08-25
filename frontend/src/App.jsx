import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TaskManager from './pages/TaskManager';
import TimeTracker from './pages/TimeTracker';
import Settings from './pages/Settings';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light-theme');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme');
  };

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/tasks">Task Manager</a></li>
            <li><a href="/time-tracker">Time Tracker</a></li>
            <li><a href="/settings">Settings</a></li>
          </ul>
          <button onClick={toggleTheme}>
            {theme === 'light-theme' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
          </button>
        </nav>
        <main className="main-content">
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/tasks" component={TaskManager} />
            <Route path="/time-tracker" component={TimeTracker} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
