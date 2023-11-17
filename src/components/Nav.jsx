import { Link } from "react-router-dom";

function Nav() {
    return (
      <ul>
        <li>
          <Link to="/pokemons">Pokemons</Link>
        </li>
        <li>
          Page 2
        </li>
        <li>
          Page 3
        </li>
      </ul>
    );
  }
  
  export default Nav;