import React from "react";
import videobg from "../assets/videoBg.mp4";
import arrowDown from "../assets/icons8-expand-arrow-90.png";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header h-screen mt-24">
      <div className="absolute left-0 top-0 w-full h-full bg-overlay mt-24 z-10"></div>
      <video
        src={videobg}
        autoPlay
        loop
        muted
        className="fixed left-0 top-0 -z-20 mt-24 w-full h-full object-cover"
      />
      <div className="absolute w-full h-full top-0 flex  flex-col gap-4 md:gap-8 justify-center items-center text-white z-10">
        <h1 className="text-4xl md:text-5xl w-1/2 text-center">
          Improve your automation systems
        </h1>
        <Link to="about" spy={true} smooth={true} offset={-95} duration={1000}>
          <img src={arrowDown} alt="arrow down" className="w-16 md:w-20 " />
        </Link>
      </div>
    </div>
  );
};

export default Header;
