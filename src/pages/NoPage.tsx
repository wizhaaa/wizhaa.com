import Nav from "../components/Nav";
import Waves from "../components/Waves";
import Footer from "../components/Footer";

const NoPage = () => {
  return (
    <div className="page">
      <div className="half">
        <h1> 404 </h1>
        <h2> Page not found. </h2>
        <Nav />
      </div>
      <Waves />
      <div className="milk">Seems like you got lost. Let's get back home.</div>
      <Footer />
    </div>
  );
};

export default NoPage;
