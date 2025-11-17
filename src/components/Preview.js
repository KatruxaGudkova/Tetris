import "./Preview.css";
import React from "react";
import { buildBoard } from "../business/Board.js";
import { transferToBoard } from "../business/Tetrominoes.js";
import BoardCell from "./BoardCell.js";

const Preview = ({ tetromino, index }) => {
  const { shape, className } = tetromino;
  const board = buildBoard({ rows: 4, columns: 4 });

  board.rows = transferToBoard({
    className,
    isOccupied: false,
    position: { row: 0, column: 0 },
    rows: board.rows,
    shape,
  });

  const previewTitles = ["Следующая фигура", "Через 1", "Через 2", "Через 3"];

  return (
    <div className="Preview">
      <div className="Preview-title">
        {previewTitles[index] || `Через ${index}`}
      </div>
      <div className="Preview-board">
        {board.rows.map((row, y) =>
          row.map((cell, x) => (
            <BoardCell key={x * board.size.columns + y} cell={cell} />
          ))
        )}
      </div>
    </div>
  );
};

export default React.memo(Preview);
