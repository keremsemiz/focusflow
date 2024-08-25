import React from 'react';

function Dashboard() {
  return (
    <div className="container">
      <h1 className="title">Dashboard</h1>
      <p className="lead">Welcome back! Here's an overview of your day:</p>

      <div className="card">
        <h2 className="headline">Today's Productivity</h2>
        <div className="flex">
          <div className="card sunken">
            <h3 className="subheadline">Tasks Completed</h3>
            <p className="title">5</p>
          </div>
          <div className="card sunken">
            <h3 className="subheadline">Hours Focused</h3>
            <p className="title">3h 45m</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="headline">Upcoming Tasks</h2>
        <ul className="list">
          <li>Finish the report <span className="caption">Due: Today</span></li>
          <li>Prepare presentation <span className="caption">Due: Tomorrow</span></li>
          <li>Team meeting <span className="caption">Due: Friday</span></li>
        </ul>
      </div>

      <div className="card">
        <h2 className="headline">Quick Links</h2>
        <div className="flex">
          <a href="/tasks" className="pill">Manage Tasks</a>
          <a href="/time-tracker" className="pill">Time Tracker</a>
          <a href="/settings" className="pill">Settings</a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
