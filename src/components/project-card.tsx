"use client";

import Image from "next/image";
import Link from "next/link";
import type { ProjectCardProps } from "@/types/types";
import { useTranslation } from "@/hooks/useTranslation";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export function ProjectCard({ id, img, title, desc }: ProjectCardProps) {
  const t = useTranslation("projects");

  return (
    <Card color="transparent" shadow={false} {...({} as any)}>
      <CardHeader
        floated={false}
        className="mx-0 mt-0 mb-6 h-48"
        {...({} as any)}
      >
        <Link href={`/proyectos/${id}`}>
          <Image
            src={img}
            alt={title}
            width={768}
            height={768}
            className="h-full w-full object-cover"
          />
        </Link>
      </CardHeader>
      <CardBody className="p-0" {...({} as any)}>
        <Link
          href={`/proyectos/${id}`}
          className="text-foreground transition-colors hover:text-accent"
        >
          <Typography variant="h5" className="mb-2" {...({} as any)}>
            {title}
          </Typography>
        </Link>
        <Typography
          className="mb-6 font-normal text-muted-foreground"
          {...({} as any)}
        >
          {desc}
        </Typography>
        <Link href={`/proyectos/${id}`}>
          <Button
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/80 transition-colors"
            {...({} as any)}
          >
            {t("details")}
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
