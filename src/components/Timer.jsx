import React, { useState, useEffect } from "react";

function Timer() {
  const [counter, setCounter] = useState(30);

  useEffect(() => {
    if (counter > 0) setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div className="bg-gray-300 rounded-xl flex items-center justify-center w-full h-16 max-w-[880px] relative">
      <p className="text-5xl z-10 font-extrabold">{counter}</p>
      <div
        className="absolute left-0 h-16 bg-green-400 z-0 rounded-xl"
        style={{ width: `${counter * 3.33}%` }}
      />
    </div>
  );
}

export default Timer;
