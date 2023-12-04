import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  const statusArr = checkGuess(value, answer);

  function setClassName(num) {
    return `cell ${statusArr[num].status}`;
  }

  return (
    <div className="guess-results">
      <p className="guess">
        {range(5).map((num) => (
          <span className={value ? setClassName(num) : 'cell'} key={num}>
            {value ? value[num] : undefined}
          </span>
        ))}
      </p>
    </div>
  );
}

export default Guess;
