import React from 'react';

function GameInput({ handleGuessSubmission, gameStatus }) {
  const [guess, setGuess] = React.useState('');
  const disableInput = gameStatus === 'won' || gameStatus === 'lost';

  function handleSubmit(event) {
    event.preventDefault();
    handleGuessSubmission(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={disableInput}
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        maxLength={5}
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GameInput;
