"use client";

import { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  CodeBracketIcon,
  BuildingLibraryIcon,
  DevicePhoneMobileIcon,
  ServerStackIcon,
  CommandLineIcon,
  FolderOpenIcon,
  CubeTransparentIcon,
  CloudIcon,
  ShieldCheckIcon,
  EyeIcon
} from "@heroicons/react/24/solid";

import SkillCard from "../components/skill-card.jsx";

// Mapeo de nombres de iconos a componentes reales
const iconMap = {
  RectangleGroupIcon: RectangleGroupIcon,
  CodeBracketIcon: CodeBracketIcon,
  BuildingLibraryIcon: BuildingLibraryIcon,
  DevicePhoneMobileIcon: DevicePhoneMobileIcon,
  ServerStackIcon: ServerStackIcon,
  CommandLineIcon: CommandLineIcon,
  FolderOpenIcon: FolderOpenIcon,
  CubeTransparentIcon: CubeTransparentIcon,
  CloudIcon: CloudIcon,
  ShieldCheckIcon: ShieldCheckIcon,
  EyeIcon: EyeIcon,
};

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("/api/skills");
        if (!response.ok) {
          throw new Error("Error al obtener los datos de habilidades");
        }
        const data = await response.json();

        // Reemplazar los nombres de iconos por sus componentes reales
        const processedSkills = data.map(skill => ({
          ...skill,
          icon: iconMap[skill.icon] || EyeIcon, // Usa un icono por defecto si no se encuentra
        }));

        setSkills(processedSkills);
      } catch (error) {
        console.error("Error al cargar las habilidades:", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section id="skills" className="bg-white px-6 sm:px-12 py-16">
      <div className="container mx-auto text-center max-w-[1200px]">
        <Typography variant="h2" color="blue-gray" className="mb-3">
          Habilidades
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12 mb-6">
          Desarrollo software que convierte ideas en soluciones digitales prácticas y funcionales. Descubre cómo puedo aportar valor a tu proyecto.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-1 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
