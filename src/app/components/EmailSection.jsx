// ./src/app/components/EmailSection.jsx

"use client";
import React, { useState } from "react";
import FacebookIcon from "../../../public/facebook-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import reactTextareaAutosize from "react-textarea-autosize";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
  
    try {
      
        console.log("Message sent.");
        setEmailSubmitted(true);
        setTimeout(() => {
          setEmailSubmitted(false);
        }, 5000);
      
    } catch (error) {
      console.error("Error sending message:", error);
    }
  
    // Clear input fields
    e.target.email.value = "";
    e.target.subject.value = "";
    e.target.message.value = "";
  };
  

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div>
        <h5 className="text-xl font-bold my-2">
          <span style={{ color: 'red' }}>Hablemos</span>
        </h5>
        <p className="mb-4 max-w-md">
          ¿Listo para llevar tu próxima fiesta al siguiente nivel? ¡Genial! Estamos aquí para ayudarte a hacerlo 
          realidad. Ponte en contacto con nosotros para discutir tus ideas, solicitar un presupuesto personalizado 
          o simplemente para decir hola. Nos encantaría escucharte y trabajar juntos para crear la fiesta perfecta.
        </p>
        <br></br>
        <div className="socials flex flex-row gap-5 flex justify-center w-28 h-15">
          <Link href="https://www.facebook.com" className="bg-red-500 rounded-full p-3 w-20 transition ease-in-out hover:scale-110 duration-300">
            <Image src={FacebookIcon} alt="Facebook Icon" />
          </Link>
          <Link href="https://www.linkedin.com" className="bg-red-500 rounded-full p-3 w-20 transition ease-in-out hover:scale-110 duration-300">
            <Image src={LinkedinIcon} alt="Linkedin Icon"/>
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted && (
          <p className="text-green-500 text-sm mt-2">
            ¡Correo electrónico enviado exitosamente!
          </p>
        )}
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-red-500 block mb-2 text-sm font-medium"
            >
              Tu email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-red-300 text-blue-300 text-sm rounded-lg block w-full p-2.5"
              placeholder="email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-red-500 block text-sm mb-2 font-medium"
            >
              Asunto
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-red-300 text-blue-300 text-sm rounded-lg block w-full p-2.5"
              placeholder="Solo saludando"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-red-500 block text-sm mb-2 font-medium"
            >
              Mensaje
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-red-300 text-blue-300 text-sm rounded-lg block w-full p-2.5"
              placeholder="Escribe tu mensaje aquí..."
              style={{overflow: 'hidden', resize: 'none'}}
              onInput={e => {
                e.target.style.height = 'auto';
                e.target.style.height = e.target.scrollHeight + 'px';
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white text-sm font-medium rounded-lg block w-full p-2.5 hover:bg-red-700"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
