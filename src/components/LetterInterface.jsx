import React, { useEffect, useState } from "react";
import LetterPool from "./LetterPool";
import SelectedLetters from "./SelectedLetters";
import VowelCons from "./VowelCons";
import WordList from "./WordList";

function LetterInterface() {
  const [letterPool, setLetterPool] = useState([]);
  const [letterPoolFull, setLetterPoolFull] = useState(false);
  const [wordLetters, setWordLetters] = useState([]);
  const [usedLetters, setUsedLetters] = useState([]);
  const [words, setWords] = useState([]);

  useEffect(() => {
    if (letterPool.length >= 9) {
      setLetterPoolFull(true);
    } else {
      setLetterPoolFull(false);
    }
  }, [letterPool]);

  return (
    <div className="flex flex-col items-center gap-4 ">
      <WordList words={words} />

      <div className="flex gap-2 w-full bg-gray-800 p-4 justify-center items-center">
        {letterPoolFull ? (
          <SelectedLetters
            wordLetters={wordLetters}
            setWordLetters={setWordLetters}
            setUsedLetters={setUsedLetters}
            setWords={setWords}
          />
        ) : (
          <p>Select nine vowels or consonants to start the round</p>
        )}
      </div>

      <div className="flex flex-col items-center gap-4 border-2 border-black rounded-xl p-4">
        {letterPool.length > 0 ? (
          <LetterPool
            usedLetters={usedLetters}
            setUsedLetters={setUsedLetters}
            setWordLetters={setWordLetters}
            letterPool={letterPool}
          />
        ) : (
          <></>
        )}

        {!letterPoolFull && (
          <VowelCons letterPool={letterPool} setLetterPool={setLetterPool} />
        )}
      </div>
    </div>
  );
}

export default LetterInterface;
