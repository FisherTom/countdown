import React from "react";

function VowelCons({ setChosenLetters, chosenLetters }) {
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
    if (chosenLetters.length < 9) {
      let newLetter = isVowel
        ? vowels[Math.floor(Math.random() * vowels.length)]
        : cons[Math.floor(Math.random() * cons.length)];
      setChosenLetters((currentLetters) => {
        return [...currentLetters, newLetter];
      });
    }
  };

  return (
    <div className="flex gap-2 justify-center">
      <button onClick={() => handleAddLetter(true)}>Vowel</button>
      <button onClick={() => handleAddLetter(false)}>Consonant</button>
    </div>
  );
}

export default VowelCons;
