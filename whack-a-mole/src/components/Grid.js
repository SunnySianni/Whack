import React from 'react';
import Mole from './Mole';

const Grid = ({ grid, onMoleClick }) => {
  return (
    <div className="game-grid">
      {grid.map((isMole, index) => (
        <Mole
          key={index}
          isVisible={isMole}
          onClick={() => onMoleClick(index)}
        />
      ))}
    </div>
  );
};

export default Grid;