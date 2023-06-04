import Nav from "../components/Nav";
import Waves from "../components/Waves";
import Footer from "../components/Footer";

import WatchList from "../components/WatchList";

const About = () => {
  return (
    <div className="page">
      <div className="half">
        <h1> About </h1>
      </div>
      <Nav />

      <Waves />
      <div className="milk">
        <div className="about-h">Hello!</div>
        <p className="headline">
          First-gen coder having fun making projects on the web.
        </p>

        <div className="about-body">
          <div className="about-content">
            <p>
              Currently, I'm attending Cornell University as a computer science
              major while serving as the <em>Technical Project Manager </em> for
              Design at Cornell within Design Tech & Initiative, acting{" "}
              <em> Vice President </em>
              of the Association of Computer Science Undergraduates, a{" "}
              <em>Big </em>
              in the Chinese Student Association, and a <em>brother </em>in
              Alpha Phi Omega.
            </p>
            <p>
              As for development, I have real project experience with git/Github
              work flows, <em> collaborating</em> with project managers,
              developers, designers on Figma, Notion, Jira and more, working
              with large codebases, setting up well-structured and organized
              projects,
              <em> deployment</em> on Virtual Machines like Digital Ocean,
              setting up and interacting with databases like MongoDB and
              Firebase,
              <em> web frameworks </em>
              like Express, React, Next, MUI and more.
            </p>
          </div>
          <img className="me2-img" src="/dumbo_me.jpg" alt="me" />
        </div>

        <WatchList />
      </div>
      <Footer />
    </div>
  );
};

export default About;
