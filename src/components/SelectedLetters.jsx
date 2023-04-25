import React from "react";

function SelectedLetters({ wordLetters, setWordLetters, setUsedLetters }) {
  return (
    <div className="flex gap-2 w-full bg-blue-400 h-28 justify-center items-center">
      <ul className="flex justify-center gap-6  p-2 w-fit">
        {wordLetters.map((letter, i) => {
          return (
            <li
              key={i}
              className={
                "w-20 h-20 bg-gray-300 flex justify-center items-center text-4xl"
              }
            >
              {letter}
            </li>
          );
        })}
      </ul>
      {wordLetters.length > 0 ? (
        <button
          className="bg-red-500"
          onClick={() => {
            setWordLetters([]);
            setUsedLetters([]);
          }}
        >
          Clear
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SelectedLetters;
