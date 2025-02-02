"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

const Intro = () => {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
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
            Desarrollo soluciones digitales eficientes y funcionales, 
            combinando tecnología y diseño para crear productos que marcan 
            diferencia. Cada proyecto en este portfolio refleja un enfoque 
            profesional y orientado a resultados. Te invito a explorar mi trabajo 
            y descubrir cómo convertir ideas en soluciones reales.
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="logo"
          src="/images/logo.jpg"
          className="h-[30rem] w-3/4 rounded-xl object-cover mx-auto"
        />
      </div>
    </header>
  );
};

export default Intro;
