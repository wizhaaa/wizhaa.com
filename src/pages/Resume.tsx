import Nav from "../components/Nav";
import Waves from "../components/Waves";
import Footer from "../components/Footer";

import {Document, Page} from "react-pdf";
import resume from "../assets/resume.pdf";

const NoPage = () => {
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
          src="https://drive.google.com/file/d/1LgjlD8VxIRxObOViEdRPD9nHIkQ1LnLW/preview"
          width="90%"
          height="1000px"
          allow="autoplay"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default NoPage;
