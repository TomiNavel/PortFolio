"use client";

import { Typography } from "@material-tailwind/react";
import ProjectCard from "../components/project-card";

const PROJECTS = [
  {
    img: "/images/project1.jpg",
    title: "Aplicación móvil",
    desc: "Diseñada para conectarse a una api y consultar datos TPV.",
  },
  {
    img: "/images/project2.svg",
    title: "PuntoVentaCloud",
    desc: "Aplicación Web o de escritorio que actúa como TPV con base de datos en la nube.",
  },
  {
    img: "/images/project3.svg",
    title: "ScanReport",
    desc: "Aplicación web que permite crear informes de seguridad automatizados.",
  },
  {
    img: "/images/project4.svg",
    title: "OposiTests",
    desc: "Aplicación web que permite resolver preguntas y hacer exámenes de diversas oposiciones.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-8 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Proyectos
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12">
          Desde aplicaciones y desarrollo web hasta sistemas backend eficientes,
          transformo ideas en soluciones digitales funcionales.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
