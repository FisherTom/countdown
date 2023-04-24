import React, { useEffect, useState } from "react";
import SelectedLetters from "./SelectedLetters";
import VowelCons from "./VowelCons";

function LetterInterface() {
  const [chosenLetters, setChosenLetters] = useState([]);
  const [selectionsMade, setSelectionsMade] = useState(false);

  useEffect(() => {
    if (chosenLetters.length >= 9) {
      setSelectionsMade(true);
    } else {
      setSelectionsMade(false);
    }
  }, [chosenLetters]);

  return (
    <div>
      <SelectedLetters chosenLetters={chosenLetters} />
      {!selectionsMade && (
        <VowelCons
          chosenLetters={chosenLetters}
          setChosenLetters={setChosenLetters}
        />
      )}
    </div>
  );
}

export default LetterInterface;
