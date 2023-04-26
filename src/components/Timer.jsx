import React, { useState, useEffect } from "react";

function Timer({ gameOngoing, setGameOngoing, setRoundFinished }) {
  const [counter, setCounter] = useState(33);

  useEffect(() => {
    if (counter === 0) {
      console.log("timer ended");
      setGameOngoing(false);
      setRoundFinished(true);
      setCounter(33);
    }
    if (counter > 0 && gameOngoing) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [counter, gameOngoing, setGameOngoing, setRoundFinished]);

  const displayText = () => {
    if (counter === 33) {
      return "Ready";
    } else if (counter === 32) {
      return "Steady";
    } else if (counter === 31) {
      return "Go!";
    } else {
      return counter;
    }
  };

  return (
    <div className="bg-gray-300 rounded-xl flex items-center justify-center w-full h-16 max-w-[880px] relative">
      <p className="text-5xl z-10 font-extrabold">{displayText()}</p>
      <div
        className="absolute left-0 h-16 bg-green-400 z-0 rounded-xl transition-all duration-1000"
        style={{ width: `${counter * 3.33}%` }}
      />
    </div>
  );
}

export default Timer;
