import React, { useEffect, useState, useCallback } from "react";
import { getWord } from "../api";

function WordList({ words, bestWordLength, setBestWordLength }) {
  const [wordBackgrounds, setWordBackgrounds] = useState(() =>
    words.map(() => "bg-orange-300")
  );

  const checkWord = useCallback(
    (word, index) => {
      getWord(word)
        .then((res) => {
          const newWordBackgrounds = [...wordBackgrounds];
          newWordBackgrounds[index] = "bg-green-400";
          setWordBackgrounds(newWordBackgrounds);

          if (word.length > bestWordLength) {
            setBestWordLength(word.length);
          }
        })
        .catch(() => {
          const newWordBackgrounds = [...wordBackgrounds];
          newWordBackgrounds[index] = "bg-red-400";
          setWordBackgrounds(newWordBackgrounds);
        });
    },
    [wordBackgrounds, bestWordLength, setBestWordLength]
  );

  useEffect(() => {
    checkWord(words[words.length - 1], words.length - 1);
  }, [words, checkWord]);

  return (
    <div>
      {words.length > 0 ? (
        <ul className="flex gap-6 justify-center rounded-xl ">
          {words.map((word, i) => {
            return (
              <li
                key={i}
                onClick={() => checkWord(word, i)}
                className={`${
                  wordBackgrounds[i] || "bg-orange-300"
                } px-6 py-2 rounded-full capitalize font-extrabold text-2xl`}
              >
                {word}
              </li>
            );
          })}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

export default WordList;
