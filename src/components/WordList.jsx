import React, { useEffect, useState, useCallback } from "react";
import { getWord } from "../api";

function WordList({ words, bestWordLength, setBestWordLength }) {
  const [wordBackgrounds, setWordBackgrounds] = useState(() =>
    words.map(() => "bg-orange-300")
  );
  const [prevWordsLength, setPrevWordsLength] = useState(0);

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
    if (words.length > prevWordsLength) {
      const index = words.length - 1;
      checkWord(words[index], index);
    }
    setPrevWordsLength(words.length);
  }, [words, prevWordsLength, checkWord]);

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
