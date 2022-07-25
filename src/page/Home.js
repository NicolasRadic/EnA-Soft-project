import React from "react";
import About from "../component/About";
import Clients from "../component/Clients";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Header from "../component/Header";
import NavBar from "../component/NavBar";
import Projects from "../component/Projects";
import Services from "../component/Services";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Services />
      <About />
      <Projects />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
