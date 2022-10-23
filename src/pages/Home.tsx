import Nav from "../components/Nav";
import Waves from "../components/Waves";
import Footer from "../components/Footer";
import Icons from "../components/Icons";

const Home = () => {
  return (
    <div className="page">
      <div className="half">
        <h1> wizha </h1>
        <h2> Will Zhang </h2>
      </div>
      <Nav />
      <main>
        <Waves />
        <div className="milk">
          <Icons />
          <h3> Hello! </h3>
          CS major. Fueled by boba. Hardstuck programmer.
          <p>Studying at Cornell University</p>
          <p>Working in the Maryland & NJ/NY area</p>
          <p>Always looking to improve</p>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
