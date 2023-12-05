import React from 'react';

import Guess from '../Guess';
import Keyboard from '../Keyboard/Keyboard';

import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function PreviousGuesses({ guessList, answer }) {
  const checkedGuesses = guessList.map((guess) => checkGuess(guess, answer));
  return (
    <>
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED).map((num) => (
          <Guess key={num} result={checkedGuesses[num]} />
        ))}
      </div>
      <Keyboard checkedGuesses={checkedGuesses} />
    </>
  );
}

export default PreviousGuesses;
