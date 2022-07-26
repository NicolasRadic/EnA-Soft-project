import React, { useRef } from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="contact bg-white flex justify-center items-center flex-col">
      <div className="mb-4">
        <h2 className="p-4 text-2xl font-bold relative">Contact</h2>
        <div className="absolute h-2 w-24 bg-cyan translate-x-3 -translate-y-4"></div>
      </div>
      <div className="block md:hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1263.7149005236392!2d5.620006113285647!3d50.693408238934055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0f03e16234c79%3A0xb76fe7f1ea0b4244!2sEna%20Soft!5e0!3m2!1sfr!2sbe!4v1658756308220!5m2!1sfr!2sbe"
          width="320"
          height="200"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="EnA Soft"
        ></iframe>
      </div>
      <div className="hidden md:block shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1263.7149005236392!2d5.620006113285647!3d50.693408238934055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0f03e16234c79%3A0xb76fe7f1ea0b4244!2sEna%20Soft!5e0!3m2!1sfr!2sbe!4v1658756308220!5m2!1sfr!2sbe"
          width="720"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="EnA Soft"
        ></iframe>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-40 my-8">
        <Form />
        <div>
          <h4 className="text-xl font-bold pb-2"> Adresse </h4>
          <p>Rue d'Abhooz 31, 4040 Herstal</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
