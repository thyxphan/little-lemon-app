function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav" aria-label="Footer navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/about">Reserve</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      <p className="footer-copy">
        © {new Date().getFullYear()} Little Lemon. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;