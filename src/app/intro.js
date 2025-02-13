"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const Intro = () => {
  return (
    <header id="intro" className="bg-gradient-to-r from-gray-100 to-white p-8">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 min-h-[60vh]">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Bienvenido! <br /> Portfolio de desarrollo software
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            Desarrollo soluciones digitales eficientes y funcionales, combinando
            tecnología y diseño para crear productos que marcan diferencia. Cada
            proyecto en este portfolio refleja un enfoque profesional y
            orientado a resultados. Te invito a explorar mi trabajo y descubrir
            cómo convertir ideas en soluciones reales.
          </Typography>
        </div>
        <Image
          width={512}
          height={512}
          alt="logo"
          src="/images/logo.jpg"
          className="h-[12rem] w-1/3 rounded-xl object-cover mx-auto transition-transform duration-500 ease-in-out hover:scale-105"
        />

      </div>
    </header>
  );
};

export default Intro;
