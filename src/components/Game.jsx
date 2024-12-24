import React, { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    nextSquares[index] = isXNext ? "X" : "O";
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  };

  const winnerInfo = calculateWinner(squares);
  const winner = winnerInfo ? winnerInfo.winner : null;
  const winningSquares = winnerInfo ? winnerInfo.line : [];

  const isDraw = !winner && squares.every((square) => square !== null);

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      <p>
        {winner
          ? `Winner: ${winner}`
          : isDraw
          ? "It's a Draw!"
          : `Next Player: ${isXNext ? "X" : "O"}`}
      </p>
      <Board
        squares={squares}
        onSquareClick={handleClick}
        winningSquares={winningSquares}
      />
      <button className="restart" onClick={() => resetGame()}>Restart</button>
    </div>
  );

  function resetGame() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line };
    }
  }
  return null;
}
