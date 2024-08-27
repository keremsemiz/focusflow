import React, { useState } from 'react';

function Settings({ currentSettings, onSave }) {
  const [workDuration, setWorkDuration] = useState(currentSettings.workDuration);
  const [shortBreak, setShortBreak] = useState(currentSettings.shortBreak);
  const [longBreak, setLongBreak] = useState(currentSettings.longBreak);
  const [theme, setTheme] = useState(currentSettings.theme);

  const saveSettings = () => {
    const newSettings = {
      workDuration,
      shortBreak,
      longBreak,
      theme,
    };
    onSave(newSettings);
  };

  return (
    <div className="settings">
      <h1>Settings</h1>
      <label>
        Work Duration (minutes):
        <input
          type="number"
          value={workDuration}
          onChange={(e) => setWorkDuration(e.target.value)}
        />
      </label>
      <label>
        Short Break (minutes):
        <input
          type="number"
          value={shortBreak}
          onChange={(e) => setShortBreak(e.target.value)}
        />
      </label>
      <label>
        Long Break (minutes):
        <input
          type="number"
          value={longBreak}
          onChange={(e) => setLongBreak(e.target.value)}
        />
      </label>
      <label>
        Theme:
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
      <button onClick={saveSettings}>Save Settings</button>
    </div>
  );
}

export default Settings;
