import React from "react";
import About from "../component/About/About";
import Banner from "../component/Banner/Banner";
import Header from "../component/Header/Header";
import Projects from "../component/Projects/Projects";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Banner />
      <About />
      <Projects />
    </div>
  );
};

export default Home;
