import {FiMenu, FiX} from "react-icons/fi";
import {useState} from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <span id="boba-1" className="boba-float" />
      <span id="boba-2" className="boba-float" />
      {/* <span id="boba-3" className="boba-float" /> */}
      <span id="boba-4" className="boba-float" />
      <span id="boba-5" className="boba-float" />
      <div className="nav-w">
        <a href="/">
          <h3> Will Zhang </h3>
        </a>

        <div className="nav-links">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/about" className="nav-link">
            Info
          </a>
          <a href="/projects" className="nav-link">
            Projects
          </a>
          <a href="/resume" className="nav-link">
            Resume
          </a>
        </div>
      </div>
      <div className="hamburger">
        <a href="/">
          <h3> Will Zhang </h3>
        </a>
        {!open ? (
          <FiMenu
            onClick={() => setOpen(true)}
            className="menu-icon"
            size={40}
          />
        ) : (
          <FiX onClick={() => setOpen(false)} className="menu-icon" size={40} />
        )}
      </div>

      {open && (
        <div className="nav-stack">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/about" className="nav-link">
            About
          </a>
          <a href="/projects" className="nav-link">
            Projects
          </a>
          <a href="/resume" className="nav-link">
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
