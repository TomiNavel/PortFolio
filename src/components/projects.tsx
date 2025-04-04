"use client";

import { Typography } from "@material-tailwind/react";
import ProjectCard from "@/components/project-card";
import type { Project } from "@/types/types";
import { useEffect, useState } from "react";

export function Projects() {
  const [proyectos, setProyectos] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

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
  if (!proyectos.length)
    return (
      <p className="text-center text-muted text-xl">Cargando proyectos...</p>
    );

  return (
    <section id="projects" className="bg-background text-foreground p-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          variant="h2"
          className="text-foreground mb-4"
          {...({} as any)}
        >
          Proyectos
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal text-muted lg:w-6/12"
          {...({} as any)}
        >
          Soluciones funcionales y optimizadas. Me centro en la arquitectura del
          código, el rendimiento y la escalabilidad, buscando que cada
          desarrollo sea sólido y fácil de mantener.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {proyectos.map(
          ({ id, imagenDesktop, titulo, descripcion }: Project) => (
            <ProjectCard
              key={id}
              id={id}
              img={imagenDesktop}
              title={titulo}
              desc={descripcion}
            />
          )
        )}
      </div>
    </section>
  );
}

export default Projects;
