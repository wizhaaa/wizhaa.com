import type {NextPage} from "next";

import styled from "styled-components";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Waves from "./components/Waves";

const About: NextPage = () => {
  return (
    <>
      <div className="main">
        <h1> about </h1>
        <Nav />
        <Waves />
        <div className="milk">
          <div className="about-container">
            <div id="preface">
              Born in Manhattan, NYC. Raised in China. Grew up in Maryland.
              Attending Cornell University.
            </div>
            <div id="intro">
              i. My name is Will Zhang. For the realm of programming, I have
              experience in coding in all types of projects. That includes
              React, Node, MongoDB, Firebase, Digital Ocean, Dev Ops, OCaml,
              Java, and more.
              <p>
                At Cornell, I am a <strong> Technical Project Manager </strong>
                for Design Tech Initiative, a <strong>&quot;big&quot; </strong>
                in the Chinese Student Association, a
                <strong> graphic design officer </strong> for the Association
                for Computer Science Undergraduates, a<strong> brother</strong>{" "}
                in Alpha Phi Omega, a professional community service-focused
                fraternity, and more!
              </p>
            </div>
            <div className="block"></div>
            <div>
              Outside of work, I am the son of two loving immigrant parents who
              have sacrificed so much for me and my siblings and whose
              unrelentless work ethic has constantly motivated me to be the best
              possible version myself everyday. I have grown up living at my
              family-owned restaurant where I play, study, eat, and work which
              helped mold me into the person I am today.
              {/* <p>
                As I grew up at this restaurant, I have encountered countless
                customers from all walks of life. I have met my lifelong friends
                here. I have learned humility, hard work, anger, and
                forgiveness. I have experienced racism, the evolution of Chinese
                & Asian culture in America, and the loss of love.
              </p> */}
              <p>
                Currently, my healthiest hobby is working out. In my spare time,
                I like to play and watch Lacrosse, Soccer/Futbol, Basketball,
                and League of Legends. I enjoy listening to a wide variety of
                music (mainly mainstream though) such as pop, hip-hop, rnb, any
                (k-, c-, j-)pop, rnb, etc, lofi, edm, and more. I am entering
                the realm of custom keebs. Good keebs and setups can so be
                aesthetic!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
