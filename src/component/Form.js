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
      <div className="pl-3">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-1">
          <div className="flex flex-col">
            <label htmlFor="name">Prénom : </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-zinc-500 w-72 md:w-96 bg-zinc-300"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="surname">Nom de famille : </label>
            <input
              type="text"
              id="surname"
              name="surname"
              className="border border-zinc-500 w-72 md:w-96 bg-zinc-300"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="mail">email : </label>
            <input
              type="email"
              id="mail"
              name="mail"
              className="border border-zinc-500 w-72 md:w-96 bg-zinc-300"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="message">Message : </label>
            <textarea
              name="message"
              id="msg"
              className="border border-zinc-500 w-72 md:w-96 bg-zinc-300"
            />
          </div>
          <button
            type="submit"
            className="border self-end px-5 py-1 bg-zinc-300 text-ternaryBlue hover:bg-ternaryBlue hover:text-zinc-300"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
