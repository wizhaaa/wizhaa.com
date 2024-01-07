import {FiLinkedin, FiSend, FiGithub, FiInstagram} from "react-icons/fi";

const Icons = () => {
  return (
    <p className="footer-icons">
      <FiLinkedin
        onClick={() => window.open("https://www.linkedin.com/in/notwz/")}
        size={25}
      />
      <FiSend
        onClick={() => window.open("mailto:wz282@cornell.edu")}
        size={25}
      />
      <FiGithub
        onClick={() => window.open("https://github.com/wizhaaa")}
        size={25}
      />
      <FiInstagram
        onClick={() => window.open("https://www.instagram.com/notwillzhang/")}
        size={25}
      />
    </p>
  );
};

export default Icons;
