import {NextPage} from "next";

import Nav from "./components/Nav";
import Waves from "./components/Waves";
import Footer from "./components/Footer";
import {FaGithub} from "react-icons/fa";
import {BiLinkExternal} from "react-icons/bi";
const Project = () => {
  return (
    <div className="project-card">
      <h2> Zing x LSC </h2>
      <div className="card-content">
        Zing LSC is a collaboration between DTI and Cornell&apos;s Learning
        Strategy center to automate study partners matching on a clean and
        modern dashboard.
      </div>
      <div className="card-links">
        <div className="icon-btn">
          <FaGithub size="25px" />
        </div>
        <div className="icon-btn">
          <BiLinkExternal size="25px" />
        </div>
      </div>
      <div className="technologies-container">
        <div className="chip">React</div>
        <div className="chip">Node</div>
        <div className="chip">Firebase</div>
      </div>
    </div>
  );
};

const Projects: NextPage = () => {
  return (
    <>
      <div className="main">
        <h1>projects </h1>
        <Nav />
        <Waves />
        <div className="milk">
          <div className="project-container">
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
