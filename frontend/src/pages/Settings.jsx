import React, { useState } from 'react';

function Settings({ defaultSettings, updateSettings }) {
  const [workDuration, setWorkDuration] = useState(defaultSettings.workDuration);
  const [shortBreak, setShortBreak] = useState(defaultSettings.shortBreak);
  const [longBreak, setLongBreak] = useState(defaultSettings.longBreak);
  const [notifications, setNotifications] = useState(defaultSettings.notifications);
  const [theme, setTheme] = useState(defaultSettings.theme);

  const handleSaveSettings = () => {
    const newSettings = {
      workDuration,
      shortBreak,
      longBreak,
      notifications,
      theme,
    };
    updateSettings(newSettings);
    alert('Settings saved successfully!');
  };

  return (
    <div className="container">
      <h1 className="title">Settings</h1>

      <div className="card">
        <h2 className="headline">Timer Settings</h2>
        <label>
          Work Duration (minutes):
          <input
            type="number"
            value={workDuration}
            onChange={(e) => setWorkDuration(e.target.value)}
            min="1"
          />
        </label>
        <label>
          Short Break (minutes):
          <input
            type="number"
            value={shortBreak}
            onChange={(e) => setShortBreak(e.target.value)}
            min="1"
          />
        </label>
        <label>
          Long Break (minutes):
          <input
            type="number"
            value={longBreak}
            onChange={(e) => setLongBreak(e.target.value)}
            min="1"
          />
        </label>
      </div>

      <div className="card">
        <h2 className="headline">Notifications</h2>
        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
          Enable Notifications
        </label>
      </div>

      <div className="card">
        <h2 className="headline">Theme</h2>
        <label>
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>

      <button onClick={handleSaveSettings} className="pill">Save Settings</button>
    </div>
  );
}

export default Settings;
