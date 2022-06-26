import type {NextPage} from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Waves from "./components/Waves";
import Portfolio from "./components/Portfolio";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import croppedPortrait from "../public/img/croppedPortrait.png";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title> notwz </title>
        <meta name="description" content="will zhang portfolio website" />

        {/* font */}
        <link
          rel="stylesheet"
          href="https://use.typekit.net/yee2bjk.css"
        ></link>

        <link
          rel="stylesheet"
          href="https://use.typekit.net/yee2bjk.css"
        ></link>

        {/* flavicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1> notwz </h1>
        <div className="portrait-img">
          <Image src={croppedPortrait} alt="self portrait" />
        </div>

        <h2>
          {" "}
          <i> will zhang</i>
        </h2>
        <Nav />
        <Waves />
        <div className="milk">
          <div className="content-wrapper">
            <Portfolio />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
