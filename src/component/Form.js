import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Form = () => {
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
    <div>
      <div className="p-3">
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col">
            <label htmlFor="name">Prénom : </label>
            <input type="text" id="name" name="name" className="border w-80" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="surname">Nom de famille : </label>
            <input
              type="text"
              id="surname"
              name="surname"
              className="border w-80"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="mail">email : </label>
            <input type="email" id="mail" name="mail" className="border w-80" />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="message">Message : </label>
            <textarea
              name="message"
              id="msg"
              className="border w-80"
            ></textarea>
          </div>
          <button type="submit" className="border">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
