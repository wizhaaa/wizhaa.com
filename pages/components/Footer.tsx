import {FaLinkedin} from "react-icons/fa";
import {IoMail} from "react-icons/io5";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div id="main-col" className="col">
          <h2> You&apos;ve reached the bottom!</h2>
          <div> Thanks for stopping by! Your time is appreciated. </div>
          <div>
            {" "}
            You can reach me at the links below. I&apos;d be happy to connect!{" "}
          </div>
          <div className="footer-icons">
            <a className="icon" href="https://www.linkedin.com/in/notwz/">
              <FaLinkedin />
            </a>
            <a className="icon" href="mailto:wz282@cornell.edu">
              <IoMail />
            </a>
          </div>
        </div>
        <div className="col">
          <h3> WORK </h3>
          <a className="footer-link" href="/projects">
            projects
          </a>
          <a className="footer-link" href="/gallery">
            gallery
          </a>
          <h3> OTHER </h3>
          <a className="footer-link" href="/resume">
            resume
          </a>
        </div>
      </div>
      <div className="copyright"> © WILL ZHANG 2022</div>
    </footer>
  );
};

export default Footer;
