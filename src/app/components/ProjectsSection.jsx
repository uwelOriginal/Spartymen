"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "SPIDERMAN: Llegando a CASA",
    description: "Material promocional de Spartymen",
    image: "/images/projects/gordispidey.jpeg",
    tag: ["Ambos", "Fotos"],
    gitUrl: "https://drive.google.com/drive/folders/1VfQUORUWLZHmPIR4JsgcyKQvl9tU4DmA",
    previewUrl: "https://drive.google.com/embeddedfolderview?id=1VfQUORUWLZHmPIR4JsgcyKQvl9tU4DmA#grid",
  },
  {
    id: 2,
    title: "La leyendo del globo arácnido...",
    description: "¡Promoción de Sparty-Fest!",
    image: "/images/projects/globo.jpg",
    tag: ["Ambos", "Videos"],
    gitUrl: "https://www.youtube.com/watch?v=MAG1LoaYVFI",
    previewUrl: "https://www.youtube.com/embed/MAG1LoaYVFI",
  },
  {
    id: 3,
    title: "La Saga completa del SÍ",
    description: "El Spartyverso",
    image: "/images/projects/SpiderSi.jpg",
    tag: ["Ambos", "Videos"],
    gitUrl: "https://www.youtube.com/watch?v=sj0vss-Jofk",
    previewUrl: "https://www.youtube.com/embed/sj0vss-Jofk",
  },
  {
    id: 4,
    title: "Fiesta de Miles Morales",
    description: "¡Da tu salto de fé!",
    image: "/images/projects/miles.jpeg",
    tag: ["Ambos", "Videos"],
    gitUrl: "https://www.youtube.com/watch?v=FJzskNWF5vM",
    previewUrl: "https://www.youtube.com/embed/FJzskNWF5vM",
  },
  {
    id: 5,
    title: "Conoce a Travesuras Kids",
    description: "Grandes colaboradores de Spartymen",
    image: "/images/projects/travesuras.png",
    tag: ["Ambos", "Videos"],
    gitUrl: "https://www.youtube.com/watch?v=EdzyttQPZis",
    previewUrl: "https://www.youtube.com/embed/EdzyttQPZis",
  },
  {
    id: 6,
    title: "Frame-by-Frame: Across the Spider-Verse",
    description: "Cada segundo de la película en un fotograma",
    image: "/images/projects/across_spiderverse.jpg",
    tag: ["Ambos", "Fotos"],
    gitUrl: "https://drive.google.com/drive/folders/1Uukp517i9lgN6VOA5T6qSvbF6sQcsXOL",
    previewUrl: "https://drive.google.com/embeddedfolderview?id=1Uukp517i9lgN6VOA5T6qSvbF6sQcsXOL#grid",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Ambos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="pt-24">
      <h2 className="text-center text-4xl font-bold text-red-500 mt-4 mb-8 md:mb-12">
        Nuestros Trabajos
      </h2>
      <div className="text-red-500 flex flex-row space-x-24 justify-center items-center gap-2 py-6 px-px pb-20">
        <ProjectTag
          onClick={handleTagChange}
          name="Ambos"
          isSelected={tag === "Ambos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Fotos"
          isSelected={tag === "Fotos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Videos"
          isSelected={tag === "Videos"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
