import React from 'react';

// EX5 note: see solution video for the reusable component approach
// I'm too lazy to change everything right now, but like the way it's done :)

function GameBanner({ gameStatus, numGuesses, answer }) {
  const happyBanner = (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numGuesses === 1 ? '1 guess' : `${numGuesses} guesses`}
        </strong>
        .
      </p>
    </div>
  );

  const sadBanner = (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );

  if (gameStatus === 'won') {
    return happyBanner;
  } else if (gameStatus === 'lost') {
    return sadBanner;
  } else {
    return undefined;
  }
}

export default GameBanner;
