"use client";

import { motion } from "framer-motion";
import { JSX } from "react";
import type { Project } from "@/types/types";
import { useTranslation } from "@/hooks/useTranslation";

type ProjectTechProps = Pick<Project, "tecnologias">;

const ProjectTech = ({ tecnologias }: ProjectTechProps): JSX.Element | null => {
  const t = useTranslation("project");

  if (!tecnologias || Object.keys(tecnologias).length === 0) return null;

  const todasLasTechs = Object.values(tecnologias).flat();
  if (todasLasTechs.length === 0) return null;

  return (
    <section className="w-full py-10 px-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
        {t("techTitle")}
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {todasLasTechs.map((tech, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="text-sm font-medium px-4 py-2 rounded-full border border-border text-foreground bg-card shadow-sm hover:shadow-md hover:shadow-accent/50 transition-shadow"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default ProjectTech;
