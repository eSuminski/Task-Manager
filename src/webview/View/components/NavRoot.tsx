import React from 'react';

export const NavRoot: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <h2 style={{ margin: 0 }}>Task Board</h2>
      <button
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.5em',
          padding: '0 8px',
          lineHeight: 1,
          position: 'relative',
        }}
        aria-label="Create new Task Board"
        title="Create new Task Board"
      >
        <span style={{fontWeight: 'bold'}} role="img" aria-label="plus">+</span>
      </button>
    </div>
  );
};
