import Menu from "./Menu.js";

import { useGameOver } from "../hooks/useGameOver.js";

const Game = ({ rows, columns }) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  const start = () => {
    resetGameOver();
    console.log(`Start gameOver is ${gameOver}`);
  };

  return (
    <div className="Game">
      {gameOver ? <Menu onClick={start} /> : <p>TETRIS</p>}
    </div>
  );
};

export default Game;
