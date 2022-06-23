const portfolio = [
  {
    title: "about",
    des: "cs major @ cornell university. i love to code on projects that allow me to work and learn from others! ",
    href: "https://getpupil.com",
    link: "read more",
  },
  {
    title: "projects",
    des: "come look at my cs and other projects i have worked on and their github links",
    href: "https://getpupil.com",
    link: "look",
  },
  {
    title: "gallery",
    des: "some",
    href: "https://getpupil.com",
    link: "peruse",
  },
];

const Boba = (props: any) => {
  const {index, title, des, href, link} = props;
  return (
    <span className={`boba floating ${index % 2 !== 0 && "flex-end"}`}>
      <h2> {title} </h2>
      <div>{des}</div>
      <button>
        {" "}
        <a href={href}> {link} </a>
      </button>
    </span>
  );
};

const Portfolio = () => {
  return (
    <>
      {portfolio.map((item, index) => (
        <Boba
          key={index}
          index={index}
          title={item.title}
          des={item.des}
          href={item.href}
          link={item.link}
        />
      ))}
    </>
  );
};

export default Portfolio;
