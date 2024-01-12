import { useState } from "react";
import Board from "./Board";

export default function History() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);

  const currentSquares = history[history.length - 1];
  return (
    <>
      <div>
        <Board />
      </div>
      <div>
        <ol></ol>
      </div>
    </>
  );
}
