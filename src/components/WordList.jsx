import React from "react";

function WordList({ words }) {
  return (
    <div>
      {words.length > 0 ? (
        <ul className="flex gap-6 justify-center rounded-xl ">
          {words.map((word) => {
            return (
              <li className=" bg-orange-300 px-6 py-2 rounded-full capitalize font-extrabold text-2xl">
                {word}
              </li>
            );
          })}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

export default WordList;
