"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { useTranslation } from "@/hooks/useTranslation";

const Intro: React.FC = () => {
  const t = useTranslation("intro");

  return (
    <header
      id="intro"
      className="py-12"
      style={{ background: "var(--background-gradient)" }}
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="row-start-2 lg:row-auto text-center">
          <Typography
            variant="h1"
            className="mb-4 text-foreground lg:text-5xl !leading-tight text-3xl"
            {...({} as any)}
          >
            {t("title")}
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 text-muted-foreground md:pr-16 xl:pr-28"
            {...({} as any)}
          >
            {t("subtitle")}
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
