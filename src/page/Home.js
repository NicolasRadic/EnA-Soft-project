import React from "react";
import About from "../component/About";
import Header from "../component/Header";
import NavBar from "../component/NavBar";
import Projects from "../component/Projects";

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
