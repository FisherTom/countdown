import React, { useEffect, useState } from "react";
import { consDistributuon, vowelDistributuon } from "../letterDistribution";

function VowelCons({ setLetterPool, letterPool }) {
  const [vowels, setVowels] = useState([]);
  const [cons, setCons] = useState([]);

  useEffect(() => {
    setVowels(
      Object.entries(vowelDistributuon).flatMap(([letter, count]) => {
        return Array(count).fill(letter);
      })
    );
    setCons(
      Object.entries(consDistributuon).flatMap(([letter, count]) => {
        return Array(count).fill(letter);
      })
    );
  }, []);

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
      <div className="flex gap-6 justify-center">
        <div
          className={
            "px-12 h-16 bg-red-400 text-red-900 font-extrabold rounded-full flex justify-center items-center text-xl"
          }
          onClick={() => handleAddLetter(true)}
        >
          Vowel
        </div>
        <div
          className={
            "px-12  h-16 bg-green-400 text-green-900 font-extrabold rounded-full flex justify-center items-center text-xl"
          }
          onClick={() => handleAddLetter(false)}
        >
          Consonant
        </div>
      </div>
    </div>
  );
}

export default VowelCons;
