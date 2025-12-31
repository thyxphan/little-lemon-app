import { Link } from "react-router-dom";
import logo from "../assets/little-lemon.png";

function Header() {
  return (
    <header className="header">
      <h1>
        <Link to="/">
          <img
            src={logo}
            alt="Little Lemon Logo"
            className="logo"
            width={400}
          />
        </Link>
      </h1>
    </header>
  );
}

export default Header;
