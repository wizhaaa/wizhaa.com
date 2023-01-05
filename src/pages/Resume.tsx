import Nav from "../components/Nav";
import Waves from "../components/Waves";
import Footer from "../components/Footer";

// import {Document, Page} from "react-pdf";
// import resume from "../assets/resume.pdf";

const Resume = () => {
  return (
    <div className="page">
      <div className="half">
        <Nav />
      </div>
      <Waves />
      <div className="milk">
        <h1> Resume </h1>

        <iframe
          title="resume"
          width="80%"
          height="1000px"
          src="https://docs.google.com/document/d/e/2PACX-1vTN03bYMI5evrHIVoUOMG-twCYg9rBvf5Xij2Q5z5MTZekL2tWVqmzls17r_IJYMNTjP_6OMVrbP2t8/pub?embedded=true"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default Resume;
