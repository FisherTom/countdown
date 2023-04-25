import React, { useState, useEffect } from "react";

function Timer() {
  const [counter, setCounter] = useState(30);

  useEffect(() => {
    if (counter > 0) setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div className="App">
      <div>Countdown: {counter}</div>
    </div>
  );
}

export default Timer;
