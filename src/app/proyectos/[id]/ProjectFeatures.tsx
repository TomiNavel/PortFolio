"use client";

import { motion } from "framer-motion";
import { JSX } from "react";
import type { Project } from "@/types/types";
import { useTranslation } from "@/hooks/useTranslation";

type ProjectFeaturesProps = Pick<Project, "caracteristicas">;

const ProjectFeatures = ({
  caracteristicas,
}: ProjectFeaturesProps): JSX.Element | null => {
  const t = useTranslation("project");

  if (!caracteristicas || caracteristicas.length === 0) return null;

  return (
    <section className="w-full py-10 px-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
        {t("featuresTitle")}
      </h2>
      <ul className="max-w-3xl mx-auto space-y-4">
        {caracteristicas.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-foreground bg-card px-4 py-2 rounded-lg flex items-center gap-2"
          >
            🔵 {feature}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectFeatures;
