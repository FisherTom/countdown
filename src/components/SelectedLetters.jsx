import React from "react";

function SelectedLetters({
  wordLetters,
  setWordLetters,
  setUsedLetters,
  setWords,
}) {
  const handleAddWord = () => {
    setWords((currentWords) => [...currentWords, wordLetters.join("")]);
  };
  return (
    <div className="flex gap-2 flex-col justify-center items-center">
      <ul className="flex justify-center gap-6  p-2 w-fit">
        {wordLetters.map((letter, i) => {
          return (
            <li
              key={i}
              className={
                "w-20 h-20 bg-white rounded-lg flex justify-center items-center text-4xl"
              }
            >
              {letter}
            </li>
          );
        })}
      </ul>
      <div className="flex gap-4">
        {wordLetters.length > 0 ? (
          <div
            onClick={() => {
              setWordLetters([]);
              setUsedLetters([]);
            }}
            className={
              "w-20 h-20 bg-red-400 rounded-full flex justify-center items-center text-xl"
            }
          >
            Clear
          </div>
        ) : (
          <></>
        )}

        {wordLetters.length > 0 ? (
          <div
            onClick={() => {
              handleAddWord();
              setWordLetters([]);
              setUsedLetters([]);
            }}
            className={
              "w-20 h-20 bg-green-400 rounded-full flex justify-center items-center text-xl"
            }
          >
            Add
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default SelectedLetters;
