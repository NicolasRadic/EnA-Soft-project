import React from "react";
import About from "../component/About/About";
import Header from "../component/Header/Header";
import NavBar from "../component/NavBar/NavBar";
import Projects from "../component/Projects/Projects";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Header />
      <About />
      <Projects />
    </div>
  );
};

export default Home;
