import Footer from "../components/Footer";

import resume from "../assets/resume.pdf";
import NavBar from "../components/NavBar";

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
