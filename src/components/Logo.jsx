import React from "react";

function Logo() {
  const title = ["C", "o", "u", "n", "t", "d", "o", "w", "n"];
  return (
    <div className="flex justify-center gap-1 ">
      {title.map((letter) => {
        return (
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded text-white text-4xl font-extrabold flex justify-center items-center">
            <p>{letter}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Logo;
