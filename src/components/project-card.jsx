"use client";

import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export function ProjectCard({ id, img, title, desc }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
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
      <CardBody className="p-0">
        <Link href={`/proyectos/${id}`} className="text-blue-gray-900 transition-colors hover:text-gray-800">
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
        </Link>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <Link href={`/proyectos/${id}`}>
          <Button color="gray" size="sm">
            Detalles
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}

ProjectCard.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default ProjectCard;
