import React from 'react';

const Mole = ({ isVisible, onClick }) => {
  return (
    <div 
      className={`grid-item ${isVisible ? "mole" : ""}`}
      onClick={onClick}
    />
  );
};

export default Mole;