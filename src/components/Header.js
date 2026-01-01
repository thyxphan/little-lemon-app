import { Link } from "react-router-dom";
import logo from "../assets/little-lemon.png";

function Header() {
  return (
    <header className="header">
      <Link to="/" aria-label="Go to Little Lemon homepage">
        <img
          src={logo}
          alt="Little Lemon restaurant logo"
          className="logo"
          width={400}
        />
      </Link>
    </header>
  );
}

export default Header;
