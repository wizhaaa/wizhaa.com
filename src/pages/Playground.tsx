import Nav from "../components/Nav";
import Waves from "../components/Waves";
import Footer from "../components/Footer";

const Playground = () => {
  return (
    <div className="page">
      <div className="half">
        <Nav />

        <h1> Playground </h1>
        <h2> Welcome to the playground. o7 </h2>
      </div>
      <Waves />
      <div className="milk"> Weee! </div>
      <div className="animation"> hello </div>
      <Footer />
    </div>
  );
};

export default Playground;
