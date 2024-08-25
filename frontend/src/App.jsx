import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TaskManager from './pages/TaskManager';
import TimeTracker from './pages/TimeTracker';
import Settings from './pages/Settings';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li><a href="/" className="pill">Dashboard</a></li>
            <li><a href="/tasks" className="pill">Task Manager</a></li>
            <li><a href="/time-tracker" className="pill">Time Tracker</a></li>
            <li><a href="/settings" className="pill">Settings</a></li>
          </ul>
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
