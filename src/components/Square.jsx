import React from "react";

export default function Square({ value, onClick, isWinningSquare }) {
  return (
    <button
      className={`square ${value ? "filled" : ""} ${isWinningSquare ? "winning-square" : ""}`}
      onClick={onClick}
      disabled={!!value} // Disable the button if the square is already filled
    >
      {value}
    </button>
  );
}

