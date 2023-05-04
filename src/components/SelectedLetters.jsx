import React from "react";

function SelectedLetters({
  wordLetters,
  setWordLetters,
  setUsedLetters,
  setWords,
}) {
  const handleAddWord = () => {
    if (wordLetters.length) {
      setWords((currentWords) => [...currentWords, wordLetters.join("")]);
    }
  };
  return (
    <div className="flex gap-6 flex-col  items-center">
      <p className="text-4xl md:text-6xl tracking-widest uppercase bg-gray-200 py-2 px-6 rounded">
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
            "w-32 h-16 bg-rose-400 text-slate-800 font-extrabold rounded-full border-2 border-white flex justify-center items-center text-xl cursor-pointer"
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
            "w-32 h-216 bg-emerald-400 text-slate-800 font-extrabold rounded-full border-2 border-white flex justify-center items-center text-xl cursor-pointer"
          }
        >
          Add
        </div>
      </div>
    </div>
  );
}

export default SelectedLetters;
