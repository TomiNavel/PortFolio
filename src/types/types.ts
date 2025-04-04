import type { ChangeEvent } from "react";
import type { ReactNode } from "react";

export type Project = {
    id: string;
    titulo: string;
    descripcion: string;
    imagenDesktop: string;
    imagenMobile: string;
    caracteristicas: string[];
    tecnologias: Record<string, string[]>;
    enlaces?: {
      demo?: string;
      repositorio?: string;
      descarga?: string;
    };
  };
  
  export type NavItem = {
    name: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
  };

  export type Skill = {
    title: string;
    description: string;
    icon: string;
  };

  export type SkillCardProps = Skill & {
    className?: string;
    children: ReactNode;
  };

  export type FormState = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  };

  export interface FormInputProps {
    label: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
  }

  export type ProjectCardProps = {
    id: string;
    img: string;
    title: string;
    desc: string;
  };

  export interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  }
  
  
  
  
  