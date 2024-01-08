import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import "../styles/home.scss";

import "../styles/project.scss";

const Home1 = () => {
  return (
    <div className="page">
      <NavBar />
      <div className="milk sans">
        {/* Self Hook */}
        <div className="hook">
          <div className="name fade-in">
            <span className="underline">Will Zhang </span>is a developer &
            student based in the East Coast.
            <div className="etc animation">
              <div>BA Computer Science & Economics </div>
              <a href="https://www.cornell.edu/">@Cornell University</a>
            </div>
          </div>
          <div className="memoji-container">
            <img className="memoji animation" src="/memoji.gif" />
          </div>
        </div>

        <div className="divider"></div>

        {/* Projects  */}
        <div className="project-header">Featured Projects </div>

        <div className="projects">
          <img src="/cureviews.jpg" alt="cureviews" className="proj-img" />

          <img src="/chinad.jpg" alt="chinad" className="proj-img" />
          <img src="/camlmon.jpg" alt="camlmon" className="proj-img" />
          <img src="/lsc.jpg" alt="lsc" className="proj-img" />
          <img src="/d@c.jpg" alt="d@c" className="proj-img" />
          <img src="/pupil.jpg" alt="pupil" className="proj-img" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home1;
