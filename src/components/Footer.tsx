import FooterIcons from "./FooterIcons";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2> Thanks for stopping by! </h2>
        <div className="row">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/about" className="nav-link">
            About
          </a>
          <a href="/Projects" className="nav-link">
            Projects
          </a>
        </div>
      </div>
      <FooterIcons />
    </footer>
  );
};

export default Footer;
