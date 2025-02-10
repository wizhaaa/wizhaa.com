const Project = (props: any) => {
  const {name, link, date, des} = props;
  return (
    <div>
      <div className="proj-line1">
        <a href={link}>
          <h2>{name}</h2>
        </a>
        <div className="proj-date">{date}</div>
      </div>
      <div className="proj-desc">{des} </div>
    </div>
  );
};

export default Project;
