import React from "react";
import devisImg from "../assets/tech-image-2.jpg";

const Services = () => {
  return (
    <div className="services bg-white py-5 p-4 flex flex-col justify-center items-center md:px-32 ">
      <div>
        <h2 className="p-4 text-2xl font-bold relative">À propos</h2>
        <div className="absolute h-2 w-28 bg-cyan translate-x-3 -translate-y-4"></div>
      </div>
      <div className="my-8 flex flex-col md:flex-row md:gap-4">
        <div className=" bg-zinc-300 mb-4">
          <img
            src={devisImg}
            alt="service"
            className="h-52 w-full object-cover"
          />
          <h3 className="text-xl font-bold p-6">Devis</h3>
          <p className="p-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            reiciendis nobis nulla modi. Qui, quia sunt libero similique
            voluptates hic consectetur delectus eius quas unde, ipsa recusandae
            sed porro voluptatem.
          </p>
        </div>
        <div className=" bg-zinc-300 mb-4">
          <img
            src={devisImg}
            alt="service"
            className="h-52 w-full object-cover"
          />
          <h3 className="text-xl font-bold p-6">Devis</h3>
          <p className="p-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            reiciendis nobis nulla modi. Qui, quia sunt libero similique
            voluptates hic consectetur delectus eius quas unde, ipsa recusandae
            sed porro voluptatem.
          </p>
        </div>
        <div className=" bg-zinc-300 mb-4">
          <img
            src={devisImg}
            alt="service"
            className="h-52 w-full object-cover"
          />
          <h3 className="text-xl font-bold p-6">Devis</h3>
          <p className="p-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            reiciendis nobis nulla modi. Qui, quia sunt libero similique
            voluptates hic consectetur delectus eius quas unde, ipsa recusandae
            sed porro voluptatem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
