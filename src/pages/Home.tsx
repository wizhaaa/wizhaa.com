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
              Hi! I'm Will, a student at Cornell University double majoring in
              Computer Science and Economics. I am also pursuing a minor in
              Business and Data Science. I am constantly looking for ways to
              improve my skills, broaden my worldview, and leave an impact. I
              get excited about tackling unique and challenging problems,
              collaborating with other talented minds, and bringing solutions to
              life with technology. I have tons of experience in software
              development, product management, UI/UX design principles, and
              working within large organizations.
            </p>
            <p>
              In my free time, I love to spend time with friends and family by
              cooking, reading, lifting heavy, and drinking tea!
            </p>
            <p>
              I would love to connect with new people - feel free to message me
              or email me at wz282@cornell.edu!
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
