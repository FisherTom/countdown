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
    <ul className="flex justify-center flex-wrap gap-4  w-fit rounded-xl">
      {letterPool.map((letter, i) => {
        return (
          <li
            key={i}
            className={`w-20 h-20 rounded flex justify-center items-center text-6xl capitalize font-extrabold shadow-md hover:shadow-lg cursor-pointer ${
              usedLetters.includes(i)
                ? "bg-gray-900  text-gray-600"
                : "bg-gradient-to-r from-blue-600 to-blue-800 text-white"
            } `}
            onClick={() => handleAddWordLetter(letter, i)}
          >
            {letterPool[i]}
          </li>
        );
      })}
    </ul>
  );
}

export default LetterPool;
