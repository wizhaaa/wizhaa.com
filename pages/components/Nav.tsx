import Link from "next/link";

const Nav = () => {
  return (
    <div className="nav-links">
      <Link href="/">
        <a className="link"> HOME</a>
      </Link>
      <Link href="/about">
        <a className="link"> ABOUT </a>
      </Link>
      <Link href="/projects">
        <a className="link">PROJECTS</a>
      </Link>
      <Link href="/connect">
        <a className="link">CONNECT </a>
      </Link>
    </div>
  );
};

export default Nav;
