import { Square } from "./Square.jsx";

export function GameBoard({ board, updateBoard }) {
  return (
    <section className="game">
      {board.map((_, index) => (
        <Square key={index} index={index} updateBoard={updateBoard}>
          {board[index]}
        </Square>
      ))}
    </section>
  );
}