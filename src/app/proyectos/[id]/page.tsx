"use client";

import Navbar from "@/components/navbar";
import ProjectIntro from "./ProjectIntro";
import ProjectTech from "./ProjectTech";
import ProjectFeatures from "./ProjectFeatures";
import ProjectLinks from "./ProjectLinks";
import Footer from "@/components/footer";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { Project } from "@/types/types";
import type { JSX } from "react";

export default function Proyectos(): JSX.Element {
  const { id } = useParams();
  const [proyecto, setProyecto] = useState<Project | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProyecto = async () => {
      try {
        const response = await fetch("/api/proyectos");
        if (!response.ok) throw new Error("Error al obtener proyectos");
        const data: Project[] = await response.json();
        const encontrado = data.find((p) => p.id === id);
        setProyecto(encontrado || null);
      } catch (err) {
        console.error("Error al cargar proyectos:", err);
        setError("No se pudo cargar la información del proyecto.");
      }
    };

    fetchProyecto();
  }, [id]);

  if (error) return <p className="text-center text-accent text-xl">{error}</p>;
  if (!proyecto)
    return (
      <p className="text-center text-accent text-xl">Proyecto no encontrado.</p>
    );

  return (
    <>
      <Navbar />
      <ProjectIntro
        titulo={proyecto.titulo}
        descripcion={proyecto.descripcion}
        imagenDesktop={proyecto.imagenDesktop}
        imagenMobile={proyecto.imagenMobile}
      />
      <ProjectTech tecnologias={proyecto.tecnologias} />
      <ProjectFeatures caracteristicas={proyecto.caracteristicas} />
      <ProjectLinks enlaces={proyecto.enlaces} />
      <Footer />
    </>
  );
}
