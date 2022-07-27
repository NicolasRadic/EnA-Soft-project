import React from "react";
import siemens from "../assets/Siemens-removebg.png";
import spa from "../assets/spa.png";
import abinbev from "../assets/ABInBev-removebg.png";
import corman from "../assets/Corman-removebg.png";

const Clients = () => {
  return (
    <div className="clients pt-4 pb-10 bg-zinc-300 flex justify-center items-center flex-col">
      <div className="mb-8">
        <h2 className="p-4 text-2xl font-bold relative">Clients</h2>
        <div className="absolute h-2 w-24 bg-secondaryBlue translate-x-2 -translate-y-4"></div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-16 ">
        <img
          src={siemens}
          width="769"
          height="324"
          alt="siemens"
          className="w-40 h-auto grayscale hover:grayscale-0"
        />
        <img
          src={spa}
          width="2090"
          height="1501"
          alt="spa logo"
          className="w-28 h-auto grayscale hover:grayscale-0"
        />
        <img
          src={abinbev}
          width="769"
          height="324"
          alt="abinbev logo"
          className="w-44 h-auto grayscale hover:grayscale-0"
        />
        <img
          src={corman}
          width="360"
          height="172"
          alt="abinbev logo"
          className="w-44 h-auto grayscale hover:grayscale-0"
        />
      </div>
    </div>
  );
};

export default Clients;
