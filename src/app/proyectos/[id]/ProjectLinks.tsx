"use client";

import { motion } from "framer-motion";
import { JSX } from "react";
import type { Project } from "@/types/types";

type ProjectLinksProps = Pick<Project, "enlaces">;

const ProjectLinks = ({ enlaces }: ProjectLinksProps): JSX.Element | null => {
  if (!enlaces) return null;

  return (
    <section className="w-full py-10 px-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
        Enlaces Relacionados
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
            Demo
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
            Código Fuente
          </motion.a>
        )}
      </div>
    </section>
  );
};

export default ProjectLinks;
