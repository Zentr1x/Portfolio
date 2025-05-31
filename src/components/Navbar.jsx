import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/game">Game</Link></li>
        <li><Link to="/rps">Rock Paper Scissors</Link></li>
        <li><Link to="/reflection">Reflections</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
