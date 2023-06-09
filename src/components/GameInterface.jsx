import React, { useEffect, useState } from "react";
import LetterPool from "./LetterPool";
import SelectedLetters from "./SelectedLetters";
import Timer from "./Timer";
import VowelCons from "./VowelCons";
import WordList from "./WordList";
import Logo from "./Logo";

function LetterInterface() {
  const [letterPool, setLetterPool] = useState([]);
  const [letterPoolFull, setLetterPoolFull] = useState(false);
  const [wordLetters, setWordLetters] = useState([]);
  const [usedLetters, setUsedLetters] = useState([]);
  const [words, setWords] = useState([]);
  const [bestWordLength, setBestWordLength] = useState(0);
  const [gameOngoing, setGameOngoing] = useState(false);
  const [roundFinished, setRoundFinished] = useState(false);

  useEffect(() => {
    if (letterPool.length >= 9) {
      setLetterPoolFull(true);
      setGameOngoing(true);
    } else {
      setLetterPoolFull(false);
    }
  }, [letterPool]);

  const handleNewRound = () => {
    setLetterPool([]);
    setLetterPoolFull(false);
    setWords([]);
    setUsedLetters([]);
    setWordLetters([]);
    setBestWordLength(0);
    setGameOngoing(false);
    setRoundFinished(false);
  };

  return (
    <div className="flex flex-col items-center justify-center  p-4 min-h-screen">
      <div
        className={`flex flex-col  w-full max-w-[880px] transition-all duration-1000 overflow-hidden ${
          !letterPoolFull ? "" : "scale-0 h-0"
        }`}
      >
        <Logo />
        <p className="text-center text-3xl font-light p-4">
          Select{" "}
          <span className="font-extrabold text-4xl">{`${
            9 - letterPool.length
          }`}</span>{" "}
          letters
          <br /> to start the game.
        </p>
      </div>

      {letterPoolFull && (
        <div className="p-4 flex items-center gap-2 text-center text-3xl text-slate-800">
          <p>longest word: </p>
          <p className="bg-slate-800 text-white text-4xl w-10 h-10 font-extrabold rounded-full">
            {" "}
            {bestWordLength}
          </p>
        </div>
      )}
      <div
        className={`pb-4 flex flex-col gap-4 w-full max-w-[880px] rounded-xl transition-all duration-1000 overflow-hidden ${
          gameOngoing ? "" : "scale-0 h-0"
        }`}
      >
        <Timer
          gameOngoing={gameOngoing}
          setGameOngoing={setGameOngoing}
          roundFinished={roundFinished}
          setRoundFinished={setRoundFinished}
        />
      </div>

      {words.length > 0 && (
        <WordList
          words={words}
          bestWordLength={bestWordLength}
          setBestWordLength={setBestWordLength}
        />
      )}

      <div
        className={`flex flex-col justify-center bg-slate-800 w-full px-4  max-w-[880px] rounded-xl transition-all duration-700 overflow-hidden ${
          gameOngoing ? "h-52 py-6" : "h-0 py-0"
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
        {roundFinished && (
          <div
            className="bg-slate-800 text-white font-bold rounded-full py-2 px-6 cursor-pointer shadow-md hover:shadow-xl"
            onClick={() => {
              handleNewRound();
            }}
          >
            <p>Start New Round</p>
          </div>
        )}
        {!letterPoolFull && (
          <VowelCons letterPool={letterPool} setLetterPool={setLetterPool} />
        )}
      </div>
    </div>
  );
}

export default LetterInterface;
