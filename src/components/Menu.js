import "./Menu.css";

const Menu = ({ onClick }) => (
  <div className="Menu">
    <h1>ТЕТРИС</h1>
    <br />
    <button className="Button" onClick={onClick}>
      Начать игру
    </button>
  </div>
);

export default Menu;
