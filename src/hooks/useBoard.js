import { useState, useEffect, useRef } from "react";
import { buildBoard, nextBoard } from "../business/Board";

export const useBoard = ({
  rows,
  columns,
  player,
  resetPlayer,
  addLinesCleared,
}) => {
  const [board, setBoard] = useState(buildBoard({ rows, columns }));
  const lastLinesClearedRef = useRef(0);

  useEffect(() => {
    // Создаем безопасную версию addLinesCleared внутри эффекта
    const safeAddLinesCleared = (lines) => {
      if (lines > 0 && lines !== lastLinesClearedRef.current) {
        addLinesCleared(lines);
        lastLinesClearedRef.current = lines;

        // Сбрасываем через таймаут
        setTimeout(() => {
          lastLinesClearedRef.current = 0;
        }, 50);
      }
    };

    setBoard((previousBoard) =>
      nextBoard({
        board: previousBoard,
        player,
        resetPlayer,
        addLinesCleared: safeAddLinesCleared,
      })
    );
  }, [player, resetPlayer, addLinesCleared]);

  return [board];
};
