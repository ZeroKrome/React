import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/">accueil</Link>
          <Link to="/a-propos">a propos</Link>
          <Link to="/contact">contact</Link>
          <Link to="/experiences">Expériences</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
