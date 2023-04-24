import React from "react";

function SelectedLetters({ chosenLetters }) {
  return (
    <div className="p-10">
      <ul className="flex justify-center gap-6">
        {chosenLetters.map((letter, i) => {
          return (
            <li
              key={i}
              className={
                "w-20 h-20 bg-gray-300 flex justify-center items-center"
              }
            >
              {chosenLetters[i]}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SelectedLetters;
