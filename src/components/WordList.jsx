import React, { useEffect, useState, useCallback } from "react";
import { getWord } from "../api";

function WordList({ words, bestWordLength, setBestWordLength }) {
  const [wordValid, setWordValid] = useState([]);
  const [prevWordsLength, setPrevWordsLength] = useState(0);

  const checkWord = useCallback(
    (word, index) => {
      getWord(word)
        .then((res) => {
          const newWordValid = [...wordValid];
          newWordValid[index] = true;
          setWordValid(newWordValid);

          if (word.length > bestWordLength) {
            setBestWordLength(word.length);
          }
        })
        .catch(() => {
          const newWordValid = [...wordValid];
          newWordValid[index] = false;
          setWordValid(newWordValid);
        });
    },
    [wordValid, bestWordLength, setBestWordLength]
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
        <ul className="flex gap-6 justify-center rounded-xl flex-wrap">
          {words.map((word, i) => {
            return (
              <li
                key={i}
                className={`${
                  wordValid[i] ? "bg-green-300" : "bg-red-400"
                } px-6 py-2 rounded-full capitalize font-extrabold md:text-2xl relative`}
              >
                {wordValid[i] && (
                  <p className="absolute right-[-8px] top-[-8px] text-center font-bold text-white bg-black rounded-full w-8 h-8">
                    {word.length}
                  </p>
                )}

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
