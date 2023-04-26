import React from "react";

function SelectedLetters({
  wordLetters,
  setWordLetters,
  setUsedLetters,
  setWords,
}) {
  const handleAddWord = () => {
    setWords((currentWords) => [...currentWords, wordLetters.join("")]);
  };
  return (
    <div className="flex gap-6 flex-col  items-center">
      <p className="text-4xl md:text-6xl tracking-widest capitalize bg-white py-2 px-10 rounded-full">
        {Array(9)
          .fill("_")
          .map((letter, index) => {
            if (index < wordLetters.length) {
              return wordLetters[index];
            } else {
              return letter;
            }
          })
          .join("")}
      </p>

      <div className="flex gap-12">
        <div
          onClick={() => {
            setWordLetters([]);
            setUsedLetters([]);
          }}
          className={
            "w-32 h-16 bg-red-400 text-red-900 font-extrabold rounded-full flex justify-center items-center text-xl"
          }
        >
          Clear
        </div>

        <div
          onClick={() => {
            handleAddWord();
            setWordLetters([]);
            setUsedLetters([]);
          }}
          className={
            "w-32 h-216 bg-green-400 text-green-900 font-extrabold rounded-full flex justify-center items-center text-xl"
          }
        >
          Add
        </div>
      </div>
    </div>
  );
}

export default SelectedLetters;
