import Nav from "../components/Nav";
import Waves from "../components/Waves";
import Footer from "../components/Footer";

// import {Document, Page} from "react-pdf";
import resume from "../assets/resume.pdf";

const Resume = () => {
  return (
    <div className="page">
      <Nav />
      <Waves />
      <div className="milk">
        <h1 className="about-h"> Resume </h1>

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

export default Resume;
