import React from "react";

const Projects = () => {
  return (
    <div className="projects p-4 flex flex-col justify-center items-center bg-white ">
      <div>
        <h2 className="p-4 text-2xl font-bold relative">Projets</h2>
        <div className="absolute h-2 w-24 bg-cyan translate-x-3.5 -translate-y-4"></div>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-4 md:w-10/12">
        <h3 className="w-[22rem] h-96 bg-zinc-300 m-2 ">Projets 1</h3>
        <h3 className="w-[22rem] h-96 bg-zinc-300 m-2 ">Projets 2</h3>
        <h3 className="w-[22rem] h-96 bg-zinc-300 m-2 ">Projets 3</h3>
        <h3 className="w-[22rem] h-96 bg-zinc-300 m-2 ">Projets 4</h3>
      </div>
    </div>
  );
};

export default Projects;
