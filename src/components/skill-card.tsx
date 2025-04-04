"use client";

import { Card, CardBody, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import type { SkillCardProps } from "@/types/types";

export function SkillCard({
  icon: Icon,
  title,
  description,
  className,
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card
        color="transparent"
        shadow={false}
        className={`transition-all duration-300 ease-in-out hover:scale-105 ${className}`}
        {...({} as any)}
      >
        <CardBody className="grid justify-center text-center" {...({} as any)}>
          <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full text-muted">
            <Icon className="h-6 w-6" {...({} as any)} />
          </div>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2"
            {...({} as any)}
          >
            {title}
          </Typography>
          <Typography className="px-8 font-normal text-muted" {...({} as any)}>
            {description}
          </Typography>
        </CardBody>
      </Card>
    </motion.div>
  );
}

export default SkillCard;
