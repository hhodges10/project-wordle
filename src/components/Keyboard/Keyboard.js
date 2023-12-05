import React from 'react';

import Key from '../Key';

const KEYBOARD_ALPHABET = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function determineStatus(checkedGuesses) {
  const statusObject = {};
  // word = [{'L', 'incorrect'} ...]
  checkedGuesses.forEach((word) => {
    word.forEach(({ letter, status }) => {
      statusObject[letter] = status;
    });
  });
  return statusObject;
}

// slight bug here when the same letter is used multiple times in one word, results in letter being the incorrect color
// I feel like I've learned enough from the exercise and don't want to spend too much longer on it, but it's good to note
function Keyboard({ checkedGuesses }) {
  const keyboardStatus = determineStatus(checkedGuesses);
  return (
    <>
      {KEYBOARD_ALPHABET.map((row, index) => (
        <div key={index} className="keyboard-row">
          {row.map((letter) => (
            <Key key={letter} letterStatus={keyboardStatus[letter]}>
              {letter}
            </Key>
          ))}
        </div>
      ))}
    </>
  );
}

export default Keyboard;
