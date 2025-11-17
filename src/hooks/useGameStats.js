import { useState, useCallback } from "react"; // Добавь эту строку

const buildGameStats = () => ({
  level: 1,
  linesCompleted: 0,
  linesPerLevel: 10,
  points: 0,
});

// Классическая система очков Тетриса
const getScoreForLines = (lines) => {
  switch (lines) {
    case 1: return 100;
    case 2: return 300;
    case 3: return 500;
    case 4: return 800; // Tetris!
    default: return 0;
  }
};

export const useGameStats = () => {
  const [gameStats, setGameStats] = useState(buildGameStats());

  const addLinesCleared = useCallback((lines) => {
    console.log(`Cleared ${lines} lines, score: ${getScoreForLines(lines)}`);
    
    setGameStats((previous) => {
      const linesScore = getScoreForLines(lines);
      const points = previous.points + linesScore;
      
      const { linesPerLevel } = previous;
      const newLinesCompleted = previous.linesCompleted + lines;
      const level = newLinesCompleted >= linesPerLevel 
        ? previous.level + 1 
        : previous.level;
      const linesCompleted = newLinesCompleted % linesPerLevel;

      return {
        level,
        linesCompleted,
        linesPerLevel,
        points,
      };
    });
  }, []);

  return [gameStats, addLinesCleared];
};