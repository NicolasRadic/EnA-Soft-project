import React from "react";
import siemens from "../assets/Siemens-removebg.png";
import spa from "../assets/spa.png";
import abinbev from "../assets/ABInBev-removebg.png";
import corman from "../assets/Corman-removebg.png";

const Clients = () => {
  return (
    <div className="clients bg-zinc-300 flex justify-center items-center flex-col">
      <div>
        <h2 className="p-4 text-2xl font-bold relative">Clients</h2>
        <div className="absolute h-2 w-24 bg-cyan translate-x-2 -translate-y-4"></div>
      </div>
      <div className="my-4 flex flex-wrap justify-center items-center gap-4 md:gap-16 ">
        <img
          src={siemens}
          alt="siemens"
          className="w-40 h-20 grayscale hover:grayscale-0"
        />
        <img
          src={spa}
          alt="spa logo"
          className="w-28 h-20 grayscale hover:grayscale-0"
        />
        <img
          src={abinbev}
          alt="abinbev logo"
          className="w-44 h-20 grayscale hover:grayscale-0"
        />
        <img
          src={corman}
          alt="abinbev logo"
          className="w-44 h-20 grayscale hover:grayscale-0"
        />
      </div>
    </div>
  );
};

export default Clients;
