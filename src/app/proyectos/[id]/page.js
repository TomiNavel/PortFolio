"use client";

import Navbar from "@/components/navbar";
import ProjectIntro from "./ProjectIntro";
import ProjectTech from "./ProjectTech.js";
import ProjectFeatures from "./ProjectFeatures.js";
import ProjectLinks from "./ProjectLinks.js";
import Footer from "@/components/footer";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Proyectos() {
  const { id } = useParams();
  const [proyecto, setProyecto] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProyecto = async () => {
      try {
        const response = await fetch("/api/proyectos");
        if (!response.ok) throw new Error("Error al obtener proyectos");
        const data = await response.json();
        const encontrado = data.find((p) => p.id === id);
        setProyecto(encontrado || null);
      } catch (err) {
        console.error("Error al cargar proyectos:", err);
        setError("No se pudo cargar la información del proyecto.");
      }
    };

    fetchProyecto();
  }, [id]);

  if (error) return <p className="text-center text-red-500 text-xl">{error}</p>;
  if (!proyecto) return <p className="text-center text-red-500 text-xl">Proyecto no encontrado.</p>;

  return (
    <>
      <Navbar />
      <ProjectIntro proyecto={proyecto} />
      <ProjectTech tecnologias={proyecto.tecnologias} />
      <ProjectFeatures caracteristicas={proyecto.caracteristicas} />
      <ProjectLinks enlaces={proyecto.enlaces} titulo={proyecto.titulo} />
      <Footer />
    </>
  );
}