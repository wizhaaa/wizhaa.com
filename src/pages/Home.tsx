import Nav from "../components/Nav";
import Waves from "../components/Waves";
import Footer from "../components/Footer";
import Icons from "../components/Icons";

const Home = () => {
  return (
    <div className="page">
      <div className="half"></div>
      <Nav />
      <main className="animation">
        <Waves />
        <div className="milk">
          <div className="intro">
            <h1> Hello, I'm Will! 👋 </h1>
            <h4>
              CS major.{" "}
              <span className="highlight">
                Hardstuck programmer. Fueled by boba.
              </span>
            </h4>

            <Icons />
          </div>

          <div className="intro">
            <h3> Nice to meet you 🤠 </h3>
            <p>
              Hi! I'm Will, a prospective Cornell University graduate with a
              Bachelor's degree in Computer Science and minors in Business,
              Economics, and Informational Sciences. Last summer, I have worked
              at Pupil on their user onboarding and matching functionality. On
              Campus, I work as a Technical Product Manager at Design & Tech
              Initiative and as the President of our Computer Science Club,
              where we build products for community impact and provide outreach
              for students!
            </p>

            <p>
              <a href="/projects">
                <em> View projects here ...</em>
              </a>
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
