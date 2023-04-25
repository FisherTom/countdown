import React from "react";

function WordList({ words }) {
  return (
    <div>
      <ul className="flex gap-6">
        {words.map((word) => {
          return (
            <li className=" bg-orange-300 px-6 py-1 rounded-xl">{word}</li>
          );
        })}
      </ul>
    </div>
  );
}

export default WordList;
