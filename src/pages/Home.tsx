import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Project from "../components/Project";

import "../styles/home.scss";
import "../styles/project.scss";

const Home = () => {
  return (
    <div className="page">
      <NavBar />
      <div className="milk sans">
        {/* Self Hook */}
        <div className="hook">
          <div className="name fade-in">
            <span className="underline">Will Zhang </span>is a developer,
            engineer, & student based in the East Coast.
            <div className="etc animation">
              <div>BA Computer Science & Economics </div>
              <a className="cornell" href="https://www.cornell.edu/">
                @Cornell University
              </a>
              <a className="connect" href="https://www.linkedin.com/in/notwz/">
                connect _&gt;
              </a>
            </div>
          </div>
          <div className="memoji-container">
            <img className="memoji animation" src="/memoji.gif" alt="memoji" />
          </div>
        </div>

        <div className="divider"></div>

        {/* Projects  */}
        <div className="project-header">Featured Projects </div>

        <div className="projects">
          <Project
            name="cornell reviews"
            date="2024.oct"
            des="hub for students to explore courses freely."
            link="https://www.cureviews.org/"
          />
          <Project
            name="china delight"
            date="2021.may"
            des="bringing a modern customer experience coupled with business-facing analytics."
            link="https://www.chinadelightmd.com/"
          />
          <Project
            name="camlmon"
            date="2022.mar"
            des="recreating pokemon - a childhood classic."
            link="https://github.com/wizhaaa/camlmon"
          />
          <Project
            name="zing"
            date="2023.jan"
            des="reimagining administration tools with automation"
            link="https://zing-lsc-prod.web.app/"
          />
          <Project
            name="d@c"
            date="2022.jan"
            des="home for all things design at cornell university"
            link="https://www.cudesign.io/"
          />
          <Project
            name="pupil"
            date="2022.may"
            des="discovering untapped potentials with students and mentors."
            link="https://getpupil.com/"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
