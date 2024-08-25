import React, { useState, useEffect } from 'react';

function TimeTracker({ tasks, updateTaskTime }) {
  const [selectedTaskId, setSelectedTaskId] = useState('');
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStart = () => {
    if (selectedTaskId) {
      setIsActive(true);
    } else {
      alert('Please select a task to track time.');
    }
  };

  const handlePause = () => {
    setIsActive(false);
    if (selectedTaskId) {
      updateTaskTime(selectedTaskId, time);
      setTime(0); // reset the loc time ater updateing task
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  const formatTime = (seconds) => {
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = Math.floor(seconds / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="container">
      <h1 className="title">Time Tracker</h1>

      <div className="card">
        <h2 className="headline">Select Task</h2>
        <select
          value={selectedTaskId}
          onChange={(e) => setSelectedTaskId(e.target.value)}
        >
          <option value="">Select a task</option>
          {tasks.map(task => (
            <option key={task.id} value={task.id}>{task.name}</option>
          ))}
        </select>
      </div>

      <div className="card">
        <h2 className="headline">Time Tracking</h2>
        <div className="timer-display">
          <h3>{formatTime(time)}</h3>
        </div>
        <div className="flex">
          <button onClick={handleStart} className="pill">Start</button>
          <button onClick={handlePause} className="pill">Pause</button>
          <button onClick={handleReset} className="pill outline">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default TimeTracker;
