"use client";

import { motion } from "framer-motion";
import { JSX } from "react";
import type { Project } from "@/types/types";
import { useTranslation } from "@/hooks/useTranslation";

type ProjectLinksProps = Pick<Project, "enlaces">;

const ProjectLinks = ({ enlaces }: ProjectLinksProps): JSX.Element | null => {
  const t = useTranslation("project");

  if (!enlaces) return null;

  return (
    <section className="w-full py-10 px-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
        {t("linksTitle")}
      </h2>
      <div className="flex justify-center gap-4">
        {enlaces.demo && (
          <motion.a
            href={enlaces.demo}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-accent text-accent-foreground px-6 py-3 rounded-lg text-lg font-medium transition hover:brightness-110"
          >
            {t("demo")}
          </motion.a>
        )}
        {enlaces.repositorio && (
          <motion.a
            href={enlaces.repositorio}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-accent text-accent-foreground px-6 py-3 rounded-lg text-lg font-medium transition hover:brightness-110"
          >
            {t("source")}
          </motion.a>
        )}
      </div>
    </section>
  );
};

export default ProjectLinks;
