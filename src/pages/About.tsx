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
          First-gen coder exploring unique ways to solve problems.
        </p>

        <div className="about-body">
          <div className="about-content">
            <p>
              Currently, I'm attending Cornell University as a computer science
              major while having served as the{" "}
              <em>Technical Product Manager </em> for products such as
              CUReviews, CUDesign, and Zing. I am the current{" "}
              <em> President </em>
              of the Association of Computer Science Undergraduates where we
              connect the CIS community of faculty, companies, and students with
              opportunities, events, collaborations, and more.
            </p>
            <p>
              For fun, I tutor at Cornell's Learning Strategy Center, act as an
              Teacher's Assistant, <em>"Big" </em>
              in the Chinese Student Association, and a <em>brother </em>in
              Alpha Phi.
            </p>
            <p>
              Outside of school, I like to go to the gym, play basketball &
              soccer, binge on TV shows and snacks, cook, take photos, and play
              video games with friends.
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
