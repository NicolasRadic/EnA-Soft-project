import React from "react";
import About from "../component/About";
import Header from "../component/Header";
import NavBar from "../component/NavBar";
import Projects from "../component/Projects";
import Services from "../component/Services";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Header />
      <About />
      <Services />
      <Projects />
    </div>
  );
};

export default Home;
