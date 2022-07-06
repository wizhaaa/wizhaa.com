import {FiLinkedin, FiSend, FiGithub, FiInstagram} from "react-icons/fi";

const Icons = () => {
  return (
    <p className="icons">
      <FiLinkedin
        onClick={() => window.open("https://www.linkedin.com/in/notwz/")}
        size={40}
      />
      <FiSend
        onClick={() => window.open("mailto:zhanliam21@gmail.com")}
        size={40}
      />
      <FiGithub
        onClick={() => window.open("https://github.com/notwz")}
        size={40}
      />
      <FiInstagram
        onClick={() => window.open("https://www.instagram.com/notwillzhang/")}
        size={40}
      />
    </p>
  );
};

export default Icons;
