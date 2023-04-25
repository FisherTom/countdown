import React from "react";

function LetterPool({
  letterPool,
  setWordLetters,
  usedLetters,
  setUsedLetters,
}) {
  const handleAddWordLetter = (letter, i) => {
    if (!usedLetters.includes(i)) {
      setUsedLetters((currentUsedLetters) => {
        return [...currentUsedLetters, i];
      });
      setWordLetters((currentLetters) => {
        return [...currentLetters, letter];
      });
    }
  };

  return (
    <div className="flex justify-center">
      <ul className="flex justify-center gap-6 border-2 p-2 w-fit">
        {letterPool.map((letter, i) => {
          return (
            <li
              key={i}
              className={`w-20 h-20  flex justify-center items-center text-4xl ${
                usedLetters.includes(i) ? "bg-slate-500" : "bg-slate-100"
              } `}
              onClick={() => handleAddWordLetter(letter, i)}
            >
              {letterPool[i]}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LetterPool;
