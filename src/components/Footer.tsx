import FooterIcons from "./FooterIcons";

const Footer = () => {
  return (
    <footer>
      <div className="divider"></div>
      <div className="row">Copyright (c) 2024 William Zhang</div>
      <div>
        <div className="row">
          <a href="https://www.linkedin.com/in/notwz/" className="nav-link">
            LinkedIn
          </a>
          <a href="https://github.com/wizhaaa" className="nav-link">
            GitHub
          </a>
          <a href="mailto:wz282@cornell.edu" className="nav-link">
            Email
          </a>
        </div>
      </div>
      <FooterIcons />
    </footer>
  );
};

export default Footer;
