import React from "react";

import "./GameStats.css";

const GameStats = ({ gameStats }) => {
  const { level, points, linesCompleted, linesPerLevel } = gameStats;
  const linesToLevel = linesPerLevel - linesCompleted;

  return (
    <ul className="GameStats GameStats__right">
      <li>Уровень</li>
      <li className="value">{level}</li>
      <li>Строк до следующего уровня</li>
      <li className="value">{linesToLevel}</li>
      <li>Очки</li>
      <li className="value">{points}</li>
    </ul>
  );
};

export default React.memo(GameStats);
