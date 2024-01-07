import Waves from "../components/Waves";
import Footer from "../components/Footer";

// import {Document, Page} from "react-pdf";
import resume from "../assets/resume.pdf";
import NavBar from "../components/NavBar";

const Resume1 = () => {
  return (
    <div className="page">
      <Waves />
      <div className="milk">
        <h1 className="about-h"> Resume </h1>
        <p> Last Updated: 08/26/2023 </p>
        <br />
        <iframe
          title="resume"
          id="resume"
          src={resume}
          frameBorder="0"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

const Resume = () => {
  return (
    <div className="page">
      <NavBar />
      <div className="milk sans">
        {/* Self Hook */}
        <div className="info-page">
          <div className="info-header">Resume</div>
          <div className="info-container">
            <iframe
              title="resume"
              id="resume"
              src={resume}
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
