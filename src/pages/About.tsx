import Footer from "../components/Footer";

import NavBar from "../components/NavBar";

import "../styles/info.scss";

const About = () => {
  return (
    <div className="page">
      <NavBar />
      <div className="milk sans">
        <div className="info-page">
          <div className="info-header">A little info about me.</div>
          <div className="info-container">
            Hello, I'm Will, a developer with an edge of software development,
            machine learning, data science, and product management.
            <br />
            <br />
            I'm currently a student at Cornell University studying Computer
            Science and Economics with minors in Data Science and Business. I
            have experience working at places such as Amazon Web Services (AWS),
            Millenium Management, and Yonsei University.
            <br />
            <br /> I will be graduating in Spring 2025 with dual degrees at New
            York.
            <br />
            <br />I believe in the power of technology, helping bridge
            delightful experiences between human and products, pragmatically
            solving complex problems with tactical solutions, and bringing a
            conceptual idea to reality. I enjoy the process and the sense of
            acheivement that contributions gives me.
            <br />
            <br />
            Get in touch! I would love to chat about work, projects, technology,
            or anything :)
            <br />
            <br />
            Hit me up at{" "}
            <a href="mailto:wz282@cornell.edu"> wz282@cornell.edu </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
