"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Habilidades",
    id: "skills",
    content: (
      <ul className="list-disc text-red-500 pl-2">
        <li>Bailar</li>
        <li className="text-blue-500">Acrobacias</li>
        <li>Coaching</li>
        <li className="text-blue-500">Doble de riesgo</li>
        <li>Cantar</li>
        <li className="text-blue-500">Sorprender</li>
        <li>Fotografías</li>
      </ul>
    ),
  },
  {
    title: "Limitaciones",
    id: "limit",
    content: (
      <ul className="list-disc text-red-500 pl-2">
        <li>¡Se acabó la telaraña! Spartyman puede tardar hasta una hora llegar </li>
        <li className="text-blue-500">El sentido arácnido se está calibrando, Spartyman no puede pelear por el momento </li>
        <li>Spartyman tiene sentimientos. En caso de accidentes, necesitará de su apoyo económico para recuperarse </li>
      </ul>
    ),
  },
  {
    title: "Motivaciones",
    id: "motives",
    content: (
      <ul className="list-disc text-red-500 pl-2">
        <li>Ser un héroe no es fácil. Spartyman tiene tarifas de MX$500 a MX$2000</li>
        <li className="text-blue-500">Favor realizar los pagos después del evento en un plazo menor a 48 horas ¡Spartyman necesita a su ayuda!</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="pt-10" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-red-500 mb-4 pb-5">Sobre Nosotros</h2>
          <p className="text-base text-red-500 lg:text-lg">
           Nos dedicamos a transformar cada ocasión en una experiencia verdaderamente memorable.
           Imagina tu próxima fiesta cobrando vida con la presencia de nuestro vecino amistoso, el hombre araña. 
           Inspirados por su mantra de que "un gran poder conlleva una gran responsabilidad", ¡Nos comprometemos a infundir 
           cada evento con ese mismo espíritu de emoción y aventura!
          </p>
          <h3 className="text-xl font-bold text-blue-800 pt-10">¿Quienes son los Spartymen?</h3>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("limit")}
              active={tab === "limit"}
            >
              {" "}
              Limitaciones{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("motives")}
              active={tab === "motives"}
            >
              {" "}
              Motivaciones{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
        <Image src="/images/perfil.jpg" width={500} height={500} className="rounded-2xl" />
      </div>
    </section>
  );
};

export default AboutSection;
