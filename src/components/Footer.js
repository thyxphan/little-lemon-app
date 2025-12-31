import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav" aria-label="Footer navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/specials">Specials</Link></li>
          <li><Link to="/chicago">About</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
        </ul>
      </nav>

      <p className="footer-copy">
        © {new Date().getFullYear()} Little Lemon. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
