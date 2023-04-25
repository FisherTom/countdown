import React from "react";

function VowelCons({ setLetterPool, letterPool }) {
  let vowels = ["a", "e", "i", "o", "u"];
  let cons = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const handleAddLetter = (isVowel) => {
    if (letterPool.length < 9) {
      let newLetter = isVowel
        ? vowels[Math.floor(Math.random() * vowels.length)]
        : cons[Math.floor(Math.random() * cons.length)];
      setLetterPool((currentLetters) => {
        return [...currentLetters, newLetter];
      });
    }
  };

  return (
    <div>
      <p className="p-2">Choose 9 letters to start the round</p>
      <div className="flex gap-2 justify-center">
        <button onClick={() => handleAddLetter(true)}>Vowel</button>
        <button onClick={() => handleAddLetter(false)}>Consonant</button>
      </div>
    </div>
  );
}

export default VowelCons;
