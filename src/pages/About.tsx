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
            Science and Economics with minors in Data Science and Business. My
            past experiences include working as a Software Engineer Intern at
            Amazon Web Services, Software Engineer at Millenium Management,
            Student Research Assistant at Yonsei University, Software Enginner
            at Pupil, Software Engineer at DTI, and as Software Enginner for
            China Delight. I aim to graduate in Spring 2025 with dual degrees at
            New York.
            <br />
            <br />I believe in the power of technology, helping bridge
            delightful experiences between human and products, pragmatically
            solving complex problems with tactical solutions, and bringing a
            conceptual idea to reality. I enjoy the process and the sense of
            acheivement of contribution gives me.
            <br />
            <br />
            Get in touch! I would love to chat about work, projects, technology,
            or anything :)
            <br />
            <br />
            wz282@cornell.edu
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
