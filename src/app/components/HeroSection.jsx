"use client";
import React from "react";
//import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion"; // Importa Framer Motion aquí para asegurarte de que se ejecute solo en el cliente
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";

const HeroSection = () => {
  return (
    <section className="lg:pt-16 bg-gray-900 text-center">
      <div className="grid grid-cols-1 sm:grid-cols-12 justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 mt-8 sm:mt-0"
        >
          <div className="flex justify-center">
            <Image src="/images/spiderman.png" alt="Spiderman" width={300} height={300} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: "-50%" }}
          animate={{ opacity: 1, scale: 1, x:"0%" }}
          transition={{ duration: 0.5, delay:0.5 }}
          className="col-span-8 text-center sm:text-left mt-8 sm:mt-0"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-700">
              Hola, soy tu amigable vecino Spiderman. ¡Invítame a tu próxima fiesta!
            </span>
            <br></br>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg mb-6 lg:text-xl">
          &quot;Un gran poder conlleva una gran responsabilidad, y la responsabilidad de Spartymen es hacer de tu fiesta algo inolvidable&quot;
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-500 to-red-400 hover:bg-gray-200 text-white transition ease-in-out hover:scale-110 duration-300"
            >
              ¡Contrata YA!
            </Link>
          </div>
        </motion.div>
      </div>
      <motion.div
          initial={{ opacity: 0, scale: 0.5, x: "-15%",y: "-100%"}}
          animate={{ opacity: 1, scale: 1, x: "0%", y: "0%" }}
          transition={{ duration: 0.5, delay: 0.8}}
        >
          <div className="flex justify-start p-5">
            <ModeToggle />
          </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
