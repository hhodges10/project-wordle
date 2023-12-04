import React from 'react';

function GameBanner({ gameStatus, numGuesses }) {
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
        Sorry, the correct answer is <strong>LEARN</strong>.
      </p>
    </div>
  );

  function displayBanner() {
    if (gameStatus === 'won') {
      return happyBanner;
    } else if (gameStatus === 'lost') {
      return sadBanner;
    } else {
      return undefined;
    }
  }

  return displayBanner();
}

export default GameBanner;
