import {FiMenu, FiX} from "react-icons/fi";
import {useState} from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", (_) => setWidth(window.innerWidth));

  return (
    <nav>
      <div className="nav-w">
        <a href="/">
          <div className="logo"></div>
        </a>

        <div id="nav-links">
          <NavLink to="/"> Work </NavLink>
          <NavLink to="/about"> Info </NavLink>
          <NavLink to="/resume"> Resume </NavLink>
        </div>
      </div>

      {width <= 800 && (
        <div className="nav-m">
          <a href="/">
            <div className="logo"></div>
          </a>
          <div className="menu-icon">
            {!open ? (
              <FiMenu onClick={() => setOpen(true)} size={20} color="white" />
            ) : (
              <FiX onClick={() => setOpen(false)} size={20} color="white" />
            )}
          </div>
        </div>
      )}

      {open && width <= 800 && (
        <div className="nav-stack slide-down">
          <NavLink to="/"> Work </NavLink>
          <NavLink to="/about"> Info </NavLink>
          <NavLink to="/resume"> Resume </NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
