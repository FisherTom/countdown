import React, { useState, useEffect } from "react";

function Timer({ letterPoolFull }) {
  const [counter, setCounter] = useState(63);

  useEffect(() => {
    if (counter > 0 && letterPoolFull) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [counter, letterPoolFull]);

  const displayText = () => {
    if (counter === 63) {
      return "Ready";
    } else if (counter === 62) {
      return "Steady";
    } else if (counter === 61) {
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
        style={{ width: `${counter * 1.66}%` }}
      />
    </div>
  );
}

export default Timer;
