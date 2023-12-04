import React from 'react';

import GameInput from '../GameInput';
import PreviousGuesses from '../PreviousGuesses';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  function handleGuessSubmission(guess) {
    const nextGuessList = [...guessList, guess];
    setGuessList(nextGuessList);
  }

  return (
    <>
      <PreviousGuesses guessList={guessList} />
      <GameInput handleGuessSubmission={handleGuessSubmission} />
    </>
  );
}

export default Game;
