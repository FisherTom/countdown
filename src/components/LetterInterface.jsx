import React, { useEffect, useState } from "react";
import SelectedLetters from "./SelectedLetters";
import VowelCons from "./VowelCons";

function LetterInterface() {
  const [chosenLetters, setChosenLetters] = useState([]);
  const [nineChosen, setNineChosen] = useState(false);
  const [wordLetters, setWordLetters] = useState([]);
  const [usedLetters, setUsedLetters] = useState([]);

  useEffect(() => {
    if (chosenLetters.length >= 9) {
      setNineChosen(true);
    } else {
      setNineChosen(false);
    }
  }, [chosenLetters]);

  return (
    <div className="flex flex-col items-center ">
      {nineChosen && (
        <div className="flex gap-2 justify-center p-2">
          <button
            onClick={() => {
              setWordLetters([]);
              setUsedLetters([]);
            }}
          >
            Clear
          </button>
          <button>Add Word</button>
        </div>
      )}
      {nineChosen &&
        (wordLetters.length !== 0 ? (
          <ul className="flex justify-center gap-6 bg-blue-400 p-2 w-fit">
            {wordLetters.map((letter, i) => {
              return (
                <li
                  key={i}
                  className={
                    "w-20 h-20 bg-gray-300 flex justify-center items-center"
                  }
                >
                  {letter}
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Select letters to make a word</p>
        ))}

      <SelectedLetters
        usedLetters={usedLetters}
        setUsedLetters={setUsedLetters}
        setWordLetters={setWordLetters}
        chosenLetters={chosenLetters}
      />
      {!nineChosen && (
        <VowelCons
          chosenLetters={chosenLetters}
          setChosenLetters={setChosenLetters}
        />
      )}
    </div>
  );
}

export default LetterInterface;
