"use client";

import { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
import SkillCard from "@/components/skill-card";
import type { Skill } from "@/types/types";
import {
  RectangleGroupIcon,
  CodeBracketIcon,
  BuildingLibraryIcon,
  DevicePhoneMobileIcon,
  ServerStackIcon,
  CommandLineIcon,
  FolderOpenIcon,
  CubeTransparentIcon,
  CloudIcon,
  ShieldCheckIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  RectangleGroupIcon: RectangleGroupIcon,
  CodeBracketIcon: CodeBracketIcon,
  BuildingLibraryIcon: BuildingLibraryIcon,
  DevicePhoneMobileIcon: DevicePhoneMobileIcon,
  ServerStackIcon: ServerStackIcon,
  CommandLineIcon: CommandLineIcon,
  FolderOpenIcon: FolderOpenIcon,
  CubeTransparentIcon: CubeTransparentIcon,
  CloudIcon: CloudIcon,
  ShieldCheckIcon: ShieldCheckIcon,
  EyeIcon: EyeIcon,
};

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("/api/skills");
        if (!response.ok) {
          throw new Error("Error al obtener los datos de habilidades");
        }
        const data = await response.json();

        const processedSkills: Skill[] = data.map((skill: Partial<Skill>) => ({
          ...skill,
          icon:
            iconMap[skill.icon as unknown as keyof typeof iconMap] || EyeIcon,
        }));

        setSkills(processedSkills);
      } catch (error) {
        console.error("Error al cargar las habilidades:", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section
      id="skills"
      className="bg-background text-foreground px-6 sm:px-12 py-8"
    >
      <div className="container mx-auto text-center max-w-[1200px]">
        <Typography variant="h2" className="mb-3" {...({} as any)}>
          Experiencia
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-1 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill: Skill, idx) => (
          <SkillCard key={idx} {...skill} {...({} as any)} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
