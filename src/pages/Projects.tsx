import Nav from "../components/Nav";
import Waves from "../components/Waves";
import Footer from "../components/Footer";
import Icons from "../components/Icons";

import {FiGithub} from "react-icons/fi";

import "../styles/project.scss";

const projects = [
  {
    title: "Zing",
    github: "https://github.com/cornell-dti/zing-lsc",
    rawLink: "https://zing-lsc-prod.web.app/",
    link: "zing-lsc-prod.web.app",
    des: "Administrative dashboard for Cornell's Learning Strategy Center to match students and form study groups. Implemented the emailing functionality, screen responsive student survey form, and other user interface designs.",
    techs: ["Firebase", "React", "Express", "MS Graph API"],
  },
  {
    title: "China Delight",
    github: "https://github.com/notwz/chinad",
    rawLink: "https://chinadelightmd.com",
    link: "chinadelightmd.com",
    des: "Customer-facing platform to order food online with the option to pay ahead of time using PayPal checkout.",
    techs: ["MongoDB", "React", "Express", "Digital Ocean", "PayPal"],
  },
  {
    title: "Pupil",
    rawLink: "https://getpupil.com",
    link: "getpupil.com",
    des: "An upcoming application that help match mentors with mentees to help with college applications, career help, and more. Pioneered the project's setup, design, code structure, and helped implement majority of the site.",
    techs: ["MongoDB", "React", "Express", "Next.js"],
  },
  {
    title: "Design at Cornell",
    github: "https://github.com/cornell-dti/DesignAtCornell",
    rawLink: "http://design.cornell.edu",
    link: "design.cornell.edu/",
    des: "Cornell University's hub for all things design related.",
    techs: ["Firebase", "React", "Express"],
  },
  {
    title: "Camlmon",
    github: "https://github.com/notwz/camlmon",
    des: "Pokemon inspiried game built using OCaml. Uses the graphics library to import sprites and load them to allow user to roam, catch and battle `Pokemon`.",
    techs: ["ocaml"],
  },
  {
    title: "TinDog",
    github: "https://github.com/notwz/mock-tindog-site",
    rawLink: "https://notwz.github.io/mock-tindog-site/",
    link: "notwz.github.io/mock-tindog-site/",
    des: "One of my first deployed sites. A parody site of Tinder, but for dogs. Hence, TinDog. ",
    techs: ["Bootstrap"],
  },
  {
    title: "Bikeshare Analysis",
    github: "https://github.com/notwz/bikeshare-analysis",
    rawLink: "https://github.com/notwz/bikeshare-analysis",
    link: "github",
    des: "Analysis of bikeshare data using python + pandas.",
    techs: ["pandas", "python"],
  },
  {
    title: "Sakila Database Investigation",
    github: "https://github.com/notwz/SakilaDB-Investigation",
    rawLink: "https://github.com/notwz/SakilaDB-Investigation",
    link: "github",
    des: "Analysis of a relational database. Ran SQL scripts and formulated a client-facing presentation of data.",
    techs: ["sql", "python"],
  },
];

const Project = (props: any) => {
  const {title, github, rawLink, link, des, techs} = props;
  return (
    <div className="project">
      <div className="p-title"> {title}</div>
      {github && (
        <FiGithub
          onClick={() => window.open(github)}
          className="gh-icon"
          size={35}
        />
      )}
      {link && <a href={rawLink}> {link} </a>}
      <p className="p-des">{des}</p>
      <div className="techs">
        {techs.map((tech: string) => {
          return <div className="tech">{tech}</div>;
        })}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="page">
      <div className="half">
        <h1> Projects </h1>
      </div>
      <Nav />
      <main>
        <Waves />
        <div className="milk">
          <Icons />
          <h3> Here are a couple of my projects! </h3>
          <div className="projects">
            {projects.map((project) => {
              return (
                <Project
                  title={project.title}
                  github={project.github}
                  rawLink={project.rawLink}
                  link={project.link}
                  des={project.des}
                  techs={project.techs}
                />
              );
            })}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Projects;
