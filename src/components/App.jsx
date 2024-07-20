import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function UpdateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  setInterval(UpdateTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={UpdateTime}>Get Time</button>
    </div>
  );
}

export default App;
