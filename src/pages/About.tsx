import {useState} from "react";
import {MdExpandMore, MdOutlineExpandLess} from "react-icons/md";

import Nav from "../components/Nav";
import Waves from "../components/Waves";
import Footer from "../components/Footer";

const About = () => {
  const [watchlist, setWatchlist] = useState(false);
  const [gamelist, setGamelist] = useState(false);
  return (
    <div className="page">
      <div className="half">
        <h1> About </h1>
      </div>
      <Nav />

      <Waves />
      <div className="milk">
        <div className="about-h">
          <img className="me-img" src="/me.png" alt="me" />
          Hello!
        </div>
        <p> First-gen coder having fun making projects on the web.</p>
        <p>
          Currently, I'm attending Cornell University as a computer science
          major while serving as the <em>Technical Project Manager </em> for
          Design at Cornell within Design Tech & Initiative, a{" "}
          <em> Graphic Design Officer </em>
          of Association of Computer Science Undergraduates, a <em>Big </em>in
          the Chinese Student Association, and a <em>brother </em>in Alpha Phi
          Omega.
        </p>
        <p>
          As for development, I have real project experience with git/Github
          work flows, <em> collaborating</em> with project managers, developers,
          designers on Figma, Notion, Jira and more, working with large
          codebases, setting up well-structured and organized projects,
          <em> deployment</em> on Virtual Machines like Digital Ocean, setting
          up and interacting with databases like MongoDB and Firebase,
          <em> web frameworks </em>
          like Express, React, Next, MUI and more.
        </p>
        <h3>
          <span> Watch List </span>
          <button onClick={() => setWatchlist(!watchlist)}>
            {watchlist ? (
              <MdOutlineExpandLess size={52.5} className="down" />
            ) : (
              <MdExpandMore size={52.5} className="down" />
            )}
          </button>
        </h3>
        {watchlist && (
          <>
            <p>Shows I am currently watching/recently finished</p>
            <ul>
              <li>The Succession</li>
              <li>Who Rules the World</li>
              <li>2155</li>
              <li>Summertime Render</li>
              <li>Classroom of the Elite</li>
            </ul>
          </>
        )}
        <h3>
          <span> Games List </span>
          <button onClick={() => setGamelist(!gamelist)}>
            {gamelist ? (
              <MdOutlineExpandLess size={52.5} className="down" />
            ) : (
              <MdExpandMore size={52.5} className="down" />
            )}
          </button>
        </h3>
        {gamelist ? (
          <>
            <p>Games I am currently playing/recently played</p>
            <ul>
              <li>LoL</li>
              <li>Val</li>
              <li>Genshin</li>
              <li>Lost Ark</li>
            </ul>
          </>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default About;
