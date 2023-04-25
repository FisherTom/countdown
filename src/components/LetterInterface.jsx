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

  const handleAddWord = () => {
    setWords((currentWords) => [...currentWords, wordLetters.join("")]);
  };

  return (
    <div className="flex flex-col items-center gap-4 ">
      <WordList words={words} />

      <SelectedLetters
        wordLetters={wordLetters}
        setWordLetters={setWordLetters}
        setUsedLetters={setUsedLetters}
      />
      <LetterPool
        usedLetters={usedLetters}
        setUsedLetters={setUsedLetters}
        setWordLetters={setWordLetters}
        letterPool={letterPool}
      />

      {letterPoolFull && (
        <button
          onClick={() => {
            handleAddWord();
            setWordLetters([]);
            setUsedLetters([]);
          }}
        >
          Add Word
        </button>
      )}
      {!letterPoolFull && (
        <VowelCons letterPool={letterPool} setLetterPool={setLetterPool} />
      )}
    </div>
  );
}

export default LetterInterface;
