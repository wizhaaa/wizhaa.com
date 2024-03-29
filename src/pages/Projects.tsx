import Nav from "../components/Nav";
import Waves from "../components/Waves";
import Footer from "../components/Footer";
import Icons from "../components/Icons";

import {FiGithub} from "react-icons/fi";

import "../styles/project.scss";

const projects = [
  {
    title: "CU Reviews",
    github: "https://github.com/cornell-dti/course-reviews-react-2.0",
    rawLink: "https://www.cureviews.org/",
    link: "cureviews.org",
    des: "CU Reviews provides a platform for students to submit and browse peer reviews of courses offered at Cornell University. Students can see metrics such as grades, other student experiences, and levels of difficulty/workload.  ",
    techs: ["React", "MongoDB", "Express"],
    img: "/cureviews.jpg",
  },
  {
    title: "Zing",
    github: "https://github.com/cornell-dti/zing-lsc",
    rawLink: "https://zing-lsc-prod.web.app/",
    link: "zing-lsc-prod.web.app",
    des: "Administrative dashboard for Cornell's Learning Strategy Center to match students and form study groups. Implemented the emailing functionality, screen responsive student survey form, and other user interface designs.",
    techs: ["Firebase", "React", "Express", "MS Graph API"],
    img: "/lsc.jpg",
  },
  {
    title: "China Delight",
    github: "https://github.com/wizhaaa/chinad",
    rawLink: "https://chinadelightmd.com",
    link: "chinadelightmd.com",
    des: "Customer-facing platform to order food online with the option to pay ahead of time using PayPal checkout.",
    techs: ["MongoDB", "React", "Express", "Digital Ocean", "PayPal"],
    img: "/chinad.jpg",
  },
  {
    title: "Pupil",
    rawLink: "https://getpupil.com",
    link: "getpupil.com",
    des: "An upcoming application that help match mentors with mentees to help with college applications, career help, and more. Pioneered the project's setup, design, code structure, and helped implement majority of the site.",
    techs: ["MongoDB", "React", "Express", "Next.js"],
    img: "/pupil.jpg",
  },
  {
    title: "Design at Cornell",
    github: "https://github.com/cornell-dti/DesignAtCornell",
    rawLink: "https://cudesign.io",
    link: "cudesign.io",
    des: "Cornell University's hub for all things design related.",
    techs: ["Firebase", "React", "Express"],
    img: "/d@c.jpg",
  },
  {
    title: "Camlmon",
    github: "https://github.com/wizhaaa/camlmon",
    des: "Pokemon inspiried game built using OCaml. Uses the graphics library to import sprites and load them to allow user to roam, catch and battle `Pokemon`.",
    techs: ["ocaml"],
    img: "/camlmon.jpg",
  },
  {
    title: "Sakila Database Investigation",
    github: "https://github.com/wizhaaa/SakilaDB-Investigation",
    rawLink: "https://github.com/wizhaaa/SakilaDB-Investigation",
    link: "github",
    des: "Analysis of a relational database. Ran SQL scripts and formulated a client-facing presentation of data.",
    techs: ["sql", "python"],
    img: "/sakila.jpg",
  },
  {
    title: "TinDog",
    github: "https://github.com/wizhaaa/mock-tindog-site",
    rawLink: "https://wizhaa.github.io/mock-tindog-site/",
    link: "wizhaaa.github.io/mock-tindog-site/",
    des: "One of my first deployed sites. A parody site of Tinder, but for dogs. Hence, TinDog. ",
    techs: ["Bootstrap"],
    img: "/tindog.png",
  },
  {
    title: "Bikeshare Analysis",
    github: "https://github.com/wizhaaa/bikeshare-analysis",
    rawLink: "https://github.com/wizhaaa/bikeshare-analysis",
    link: "github",
    des: "Analysis of bikeshare data using python + pandas.",
    techs: ["pandas", "python"],
    img: "/bikshare.jpg",
  },
];

const Project = (props: any) => {
  const {title, github, rawLink, link, des, techs, img} = props;
  return (
    <div className="row">
      {img && <img src={img} alt={img} className="proj-img" />}
      <div className="proj">
        <div className="p-title"> {title}</div>
        {github && (
          <FiGithub
            onClick={() => window.open(github)}
            className="gh-icon"
            size={35}
          />
        )}
        {link && (
          <a href={rawLink} className="p-link">
            {" "}
            {link}{" "}
          </a>
        )}
        <p className="p-des">{des}</p>
        <div className="techs">
          {techs.map((tech: string) => {
            return (
              <div key={tech} className="tech">
                {tech}
              </div>
            );
          })}
        </div>
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

          <div className="stack">
            {projects.map((project) => {
              return (
                <Project
                  key={project.title}
                  title={project.title}
                  github={project.github}
                  rawLink={project.rawLink}
                  link={project.link}
                  des={project.des}
                  techs={project.techs}
                  img={project.img}
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
