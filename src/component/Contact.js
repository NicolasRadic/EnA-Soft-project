import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_z3el6kl", form.current, "d5ShAEFEcthcqS_Uj")
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
        <div className="p-3">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col">
              <label htmlFor="name">Prénom : </label>
              <input type="text" id="name" name="name" className="border" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="surname">Nom de famille : </label>
              <input
                type="text"
                id="surname"
                name="surname"
                className="border"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="mail">email : </label>
              <input type="email" id="mail" name="mail" className="border" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">Message : </label>
              <textarea name="message" id="msg" className="border"></textarea>
            </div>
            <button type="submit" className="border">
              Envoyer
            </button>
          </form>
        </div>
        <div>
          <h4 className="text-xl font-bold pb-2"> Adresse </h4>
          <p>Rue d'Abhooz 31, 4040 Herstal</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
