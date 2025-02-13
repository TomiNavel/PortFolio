"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ProjectIntro = ({ proyecto }) => {
  return (
    <section className="w-full flex flex-col items-center text-center px-6 pt-6 pb-0">
      {/* Contenedor de texto arriba */}
      <div className="max-w-3xl">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-blue-600"
        >
          {proyecto.titulo}
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="text-lg text-blue-600"
        >
          {proyecto.descripcion}
        </motion.p>
      </div>

      {/* Imagen abajo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full"
      >
        {/* Imagen para pantallas grandes */}
        <Image
          src={proyecto.imagenDesktop}
          alt={proyecto.titulo}
          width={2000}
          height={1000}
          className="hidden md:block w-full h-auto object-contain"
          priority
        />

        {/* Imagen para móviles */}
        <Image
          src={proyecto.imagenMobile}
          alt={proyecto.titulo}
          width={1000}
          height={1200}
          className="block md:hidden w-full h-auto object-cover"
          priority
        />
      </motion.div>
    </section>
  );
};

export default ProjectIntro;
