import React, { useState } from "react";

function App() {
  //call function every second
  setInterval(updateTime, 1000);

  //return current time
  const now = new Date().toLocaleTimeString();

  //state variable = time
  //setTime will be used to change state variable
  //initial value is current time
  const [time, setTime] = useState(now);

  //function to update state variable
  function updateTime() {
    const newTime = new Date().toLocaleTimeString(); //return current time
    setTime(newTime); //update state variable
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
