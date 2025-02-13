"use client";

import { Typography } from "@material-tailwind/react";
import ProjectCard from "../components/project-card";
import { useEffect, useState } from "react";

export function Projects() {
  const [proyectos, setProyectos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProyectos = async () => {
      try {
        const response = await fetch("/api/proyectos");
        if (!response.ok) throw new Error("Error al obtener proyectos");
        const data = await response.json();
        setProyectos(data);
      } catch (err) {
        console.error("Error al cargar proyectos:", err);
        setError("No se pudo cargar la información de los proyectos.");
      }
    };

    fetchProyectos();
  }, []);

  if (error) return <p className="text-center text-red-500 text-xl">{error}</p>;
  if (!proyectos.length) return <p className="text-center text-gray-500 text-xl">Cargando proyectos...</p>;

  return (
    <section id="projects" className="bg-gradient-to-r from-gray-100 to-white p-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Proyectos
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12">
          Aquí encontrarás algunos de los proyectos en los que he trabajado,
          donde aplico diversas tecnologías para crear soluciones funcionales y optimizadas.
          Me centro en la arquitectura del código, el rendimiento y la escalabilidad,
          siempre buscando que cada desarrollo sea sólido y fácil de mantener.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {proyectos.map(({ id, imagenDesktop, titulo, descripcion }, idx) => (
          <ProjectCard
            key={idx}
            id={id}
            img={imagenDesktop}
            title={titulo}
            desc={descripcion}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
