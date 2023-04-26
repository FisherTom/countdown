import React, { useEffect, useState } from "react";
import LetterPool from "./LetterPool";
import SelectedLetters from "./SelectedLetters";
import Timer from "./Timer";
import VowelCons from "./VowelCons";
import WordList from "./WordList";

function LetterInterface() {
  const [letterPool, setLetterPool] = useState([]);
  const [letterPoolFull, setLetterPoolFull] = useState(false);
  const [wordLetters, setWordLetters] = useState([]);
  const [usedLetters, setUsedLetters] = useState([]);
  const [words, setWords] = useState([]);
  const [bestWordLength, setBestWordLength] = useState(0);

  useEffect(() => {
    if (letterPool.length >= 9) {
      setLetterPoolFull(true);
    } else {
      setLetterPoolFull(false);
    }
  }, [letterPool]);

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-4 min-h-screen">
      <div
        className={`flex flex-col gap-4 w-full max-w-[880px] rounded-xl transition-all duration-1000 overflow-hidden ${
          letterPoolFull ? "" : "scale-0"
        }`}
      >
        <p className="text-center text-3xl">longest word: {bestWordLength}</p>
        <Timer letterPoolFull={letterPoolFull} />
      </div>

      {words.length > 0 && (
        <WordList
          words={words}
          bestWordLength={bestWordLength}
          setBestWordLength={setBestWordLength}
        />
      )}
      <div
        className={`flex flex-col justify-center bg-gray-700 w-full px-4  max-w-[880px] rounded-xl transition-all duration-700 overflow-hidden ${
          letterPoolFull ? "h-52 py-6" : "h-0 py-0"
        }`}
      >
        <SelectedLetters
          wordLetters={wordLetters}
          setWordLetters={setWordLetters}
          setUsedLetters={setUsedLetters}
          setWords={setWords}
        />
      </div>

      <div className="flex flex-col items-center gap-12 rounded-xl p-4">
        {letterPool.length > 0 && (
          <LetterPool
            usedLetters={usedLetters}
            setUsedLetters={setUsedLetters}
            setWordLetters={setWordLetters}
            letterPool={letterPool}
          />
        )}
        {!letterPoolFull && (
          <VowelCons letterPool={letterPool} setLetterPool={setLetterPool} />
        )}
      </div>
    </div>
  );
}

export default LetterInterface;
