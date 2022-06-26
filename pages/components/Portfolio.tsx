const portfolio = [
  {
    title: "ABOUT",
    des: "CS student at Cornell University. Working in the MD and NY area.",
    href: "/about",
    link: "READ MORE",
  },
  {
    title: "PROJECTS",
    des: "Browse through my current and past projects in CS!",
    href: "/projects",
    link: "BROWSE",
  },
  {
    title: "GALA",
    des: "Take a peak at my artwork",
    href: "/gallery",
    link: "PEAK",
  },
];

const Boba = (props: any) => {
  const {index, title, des, href, link} = props;
  return (
    <span className={`boba floating ${index % 2 !== 0 && "flex-end"}`}>
      <h2> {title} </h2>
      <div>{des}</div>
      <a className="btn" href={href}>
        {link}
      </a>
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
