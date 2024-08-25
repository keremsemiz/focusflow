import React, { useState } from 'react';

function TimeTracker() {
  const [timeSpent, setTimeSpent] = useState(0);

  const startTracking = () => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      setTimeSpent(elapsedTime);
    }, 1000);

    setTimeout(() => clearInterval(interval), 10000); 
  };

  return (
    <div className="time-tracker">
      <h1>Time Tracker</h1>
      <p>Time Spent: {timeSpent} seconds</p>
      <button onClick={startTracking}>Start Tracking</button>
    </div>
  );
}

export default TimeTracker;
