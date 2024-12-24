
import React from "react";
import Square from "./Square";

export default function Board({ squares, onSquareClick, winningSquares = [] }) {
  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onSquareClick(index)}
          isWinningSquare={winningSquares.includes(index)} // Pass the winning condition
        />
      ))}
    </div>
  );
}

