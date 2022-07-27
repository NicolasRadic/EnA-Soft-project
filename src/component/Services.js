import React from "react";
import devisImg from "../assets/tech-image-2.jpg";

const Services = () => {
  return (
    <div className="services bg-white pt-4 pb-10  flex flex-col justify-center items-center  ">
      <div className="mb-8">
        <h2 className="p-4 text-2xl font-bold relative">Services</h2>
        <div className="absolute h-2 w-24 bg-secondaryBlue translate-x-3.5 -translate-y-4"></div>
      </div>
      <div className=" flex flex-row justify-center items-center flex-wrap  gap-4">
        <div className=" bg-zinc-300  w-80">
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
        <div className=" bg-zinc-300  w-80">
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
        <div className=" bg-zinc-300  w-80">
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
