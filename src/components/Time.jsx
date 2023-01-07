import React, { useState, useEffect } from "react";

export default function Time(props) {
  const currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="custom-container-Time Time">
      <div className="heading">
        <h1>Current Time</h1>
      </div>
      <h1>{time}</h1>
    </div>
  );
}
