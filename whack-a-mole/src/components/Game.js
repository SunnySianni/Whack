import React, { useState, useEffect } from 'react';
import Grid from './Grid';
import ScoreBoard from './ScoreBoard';

const Game = () => {
  // State declarations using useState
  const [score, setScore] = useState(0);
  const [grid, setGrid] = useState(new Array(9).fill(false));

  // Function to randomly show a mole
  const highlightMole = () => {
    const newGrid = new Array(9).fill(false);
    const randomIndex = Math.floor(Math.random() * 9);
    newGrid[randomIndex] = true;
    setGrid(newGrid);
  };

  // useEffect to move moles every second
  useEffect(() => {
    highlightMole(); // Initial mole placement
    const moleTimer = setInterval(highlightMole, 1000);
    return () => clearInterval(moleTimer); // Cleanup function
  }, []);

  // Function to handle mole clicks
  const handleMoleClick = (index) => {
    if (grid[index]) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <div className="game">
      <h1>Whack-a-Mole</h1>
      <ScoreBoard score={score} />
      <Grid grid={grid} onMoleClick={handleMoleClick} />
    </div>
  );
};

export default Game;