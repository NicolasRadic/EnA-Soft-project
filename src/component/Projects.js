import React from "react";
import projectImg from "../assets/tech-image-2.jpg";

const Projects = () => {
  return (
    <div className="projects py-4 flex flex-col justify-center items-center bg-white ">
      <div>
        <h2 className="p-4 text-2xl font-bold relative">Projets</h2>
        <div className="absolute h-2 w-24 bg-cyan translate-x-2 -translate-y-4"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-4 ">
        <div className="w-80 h-80 bg-zinc-300  flex justify-center items-center group relative">
          <img
            src={projectImg}
            alt="project 1"
            className="absolute object-cover w-80 h-80 group-hover:opacity-20"
          />
          <h3 className="opacity-0 group-hover:opacity-100 z-20 ">Projets 1</h3>
        </div>
        <div className="w-80 h-80 bg-zinc-300  flex justify-center items-center group relative">
          <img
            src={projectImg}
            alt="project 1"
            className="absolute object-cover w-80 h-80 group-hover:opacity-20"
          />
          <h3 className="opacity-0 group-hover:opacity-100 z-20 ">Projets 1</h3>
        </div>
        <div className="w-80 h-80 bg-zinc-300  flex justify-center items-center group relative">
          <img
            src={projectImg}
            alt="project 1"
            className="absolute object-cover w-80 h-80 group-hover:opacity-20"
          />
          <h3 className="opacity-0 group-hover:opacity-100 z-20 ">Projets 1</h3>
        </div>
        <div className="w-80 h-80 bg-zinc-300  flex justify-center items-center group relative">
          <img
            src={projectImg}
            alt="project 1"
            className="absolute object-cover w-80 h-80 group-hover:opacity-20"
          />
          <h3 className="opacity-0 group-hover:opacity-100 z-20 ">Projets 1</h3>
        </div>
      </div>
    </div>
  );
};

export default Projects;
