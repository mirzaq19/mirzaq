import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/AboutSection";
import Skill from "../components/SkillSection";
const Home: NextPage = () => {
  return (
    <div className="bg-dark1">
      <Head>
        <title>{"Mirzaq's Portfolio"}</title>
        <meta
          name="description"
          content="Welcome to my portfolio, stay enjoy to read"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Skill />
    </div>
  );
};

export default Home;
