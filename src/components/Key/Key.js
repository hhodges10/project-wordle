import React from 'react';

function Key({ letterStatus, children }) {
  return (
    <div className={`keyboard-key ${letterStatus || ''}`}>
      <p className="keyboard-key__letter">{children}</p>
    </div>
  );
}

export default Key;
