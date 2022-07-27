import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="contact pt-4 pb-10  bg-white flex justify-center items-center flex-col">
      <div className="mb-8">
        <h2 className="p-4 text-2xl font-bold relative">Contact</h2>
        <div className="absolute h-2 w-24 bg-secondaryBlue translate-x-3 -translate-y-4"></div>
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
      <div className="w-full flex flex-col md:flex-row justify-around items-center  mt-8">
        <div>
          <h3 className="pl-3 pb-4 text-xl font-bold">Nous contacter</h3>
          <p className="pl-3 pb-2 ">
            Pour toute question, appelez-nous au : 01 23 45 67 89 <br />
            ou envoyez-nous un message ci-dessous.
          </p>
          <Form />
        </div>
        <div>
          <h3 className="text-xl font-bold pb-2 mt-8"> Adresse </h3>
          <p>
            Rue d'Abhooz 31,
            <br /> 4040 Herstal
          </p>
          <h3 className="text-xl font-bold pb-2 mt-8"> Offres d'emploi </h3>
          <p>
            Pour postuler, envoyez votre C.V à l'adresse <br /> e-mail suivant :
            email.gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
