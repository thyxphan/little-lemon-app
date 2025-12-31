import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav aria-label="Main navigation">
      <ul>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
        <li><NavLink to="/specials" className={({ isActive }) => isActive ? "active" : ""}>Specials</NavLink></li>
        <li><NavLink to="/chicago" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
        <li><NavLink to="/testimonials" className={({ isActive }) => isActive ? "active" : ""}>Testimonials</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
