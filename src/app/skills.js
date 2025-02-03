"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import SkillCard from "../components/skill-card.jsx";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Desarrollo Frontend",
    children:
      "Crear experiencias web funcionales y atractivas es mi especialidad. Utilizo tecnologías modernas para diseñar interfaces intuitivas y eficientes.",
  },
  {
    icon: FingerPrintIcon,
    title: "Desarrollo de Apps Móviles",
    children:
      "Desarrollo aplicaciones móviles responsivas e intuitivas para iOS y Android, asegurando un rendimiento óptimo en cada dispositivo.",
  },
  {
    icon: SwatchIcon,
    title: "Stack Tecnológico",
    children:
      "Trabajo con tecnologías como HTML5, CSS3, JavaScript y frameworks como React y React Native para crear soluciones robustas y escalables.",
  },
  {
    icon: HashtagIcon,
    title: "Optimización Web",
    children:
      "La velocidad es clave. Optimizo sitios web para garantizar tiempos de carga rápidos, mejorando la experiencia del usuario y el SEO.",
  },
  {
    icon: EyeIcon,
    title: "Diseño Centrado en el Usuario",
    children:
      "Cada interfaz que creo combina funcionalidad y estética para garantizar una navegación intuitiva y agradable.",
  },
  {
    icon: DocumentTextIcon,
    title: "Testing y Control de Calidad",
    children:
      "Realizo pruebas rigurosas para asegurar que cada aplicación sea estable, segura y libre de errores antes de su lanzamiento.",
  },
];

const Skills = () => {
  return (
    <section className="bg-white px-8 py-8">
      <div className="container mx-auto text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Habilidades
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12">
          Más que desarrollar software, me especializo en transformar ideas en soluciones digitales efectivas. Descubre cómo puedo aportar valor a tu proyecto.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
