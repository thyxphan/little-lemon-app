import logo from "../assets/little-lemon.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon Logo" className="logo" width={300} />
    </header>
  );
}

export default Header;
