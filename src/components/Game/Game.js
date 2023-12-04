import React from 'react';

import GameInput from '../GameInput';
import PreviousGuesses from '../PreviousGuesses';
import GameBanner from '../GameBanner/GameBanner';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('in progress');
  function handleGuessSubmission(guess) {
    const nextGuessList = [...guessList, guess];
    if (guess === answer) {
      setGameStatus('won');
    } else if (nextGuessList.length === 6) {
      setGameStatus('lost');
    }
    setGuessList(nextGuessList);
  }

  return (
    <>
      <PreviousGuesses guessList={guessList} answer={answer} />
      <GameInput
        handleGuessSubmission={handleGuessSubmission}
        gameStatus={gameStatus}
      />
      <GameBanner gameStatus={gameStatus} numGuesses={guessList.length} />
    </>
  );
}

export default Game;
