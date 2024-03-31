import React from "react";
import Square from "./Square";
import calculateWinner from "./BoardLogic";

const Board = ({ squares, onClick }) => {
  const renderSquare = i => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };

  const status = calculateWinner(squares);
  let winner = status
    ? `Winner: ${status}`
    : `Next player: ${
        squares[0] === null ? "X" : squares[0] === "X" ? "O" : "X"
      }`; // Show starting player dynamically

  return (
    <div>
      <div className="status">{winner}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
