const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="col">
          <h2> You&apos;ve reached the bottom!</h2>
          <div> Thanks for stopping by! Your time is appreciated. </div>
          <div>
            {" "}
            You can reach me at the links below. I&apos;d be happy to connect!{" "}
          </div>
        </div>
        <div className="col">
          <h3> WORK </h3>
          <a> projects </a>
          <a> gallery </a>
          <h3> OTHER </h3>
          <a> resume </a>
        </div>
      </div>
      <div className="copyright"> © WILL ZHANG 2022</div>
    </footer>
  );
};

export default Footer;
