import React from "react";
import About from "../component/About/About";
import Banner from "../component/header/Header";
import Header from "../component/navBar/NavBar";
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
