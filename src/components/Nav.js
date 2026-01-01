import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav aria-label="Main navigation">
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/booking">
            Reserve
          </NavLink>
        </li>

        <li>
          <NavLink to="/specials">
            Specials
          </NavLink>
        </li>

        <li>
          <NavLink to="/chicago">
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/testimonials">
            Testimonials
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
