"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (event, href) => {
    event.preventDefault();
    const targetId = href.replace("#", "");

    if (pathname === "/") {
      // Si ya estamos en la página principal, esperar un poco y hacer scroll
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      // Si estamos en otra página, navegar a "/" y luego hacer scroll
      router.push(`/${href}`);

      // Esperamos a que la nueva página cargue antes de hacer scroll
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Le damos más tiempo para que cargue el DOM
    }
  };

  return (
    <footer className="bg-gray-800 text-white text-center p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} TomiNavel. Todos los derechos reservados.</p>

        {/* Enlaces de navegación */}
        <nav className="flex gap-4 mt-4 md:mt-0">
          <a href="#intro" onClick={(e) => handleNavigation(e, "#intro")} className="text-sm hover:text-gray-400 transition-colors">
            Inicio
          </a>
          <a href="#skills" onClick={(e) => handleNavigation(e, "#skills")} className="text-sm hover:text-gray-400 transition-colors">
            Habilidades
          </a>
          <a href="#projects" onClick={(e) => handleNavigation(e, "#projects")} className="text-sm hover:text-gray-400 transition-colors">
            Proyectos
          </a>
          <a href="#contact" onClick={(e) => handleNavigation(e, "#contact")} className="text-sm hover:text-gray-400 transition-colors">
            Contacto
          </a>
        </nav>

        {/* Enlace a términos y condiciones */}
        <p className="text-sm mt-4 md:mt-0">
          <a href="/terminos" className="underline hover:text-gray-400 transition-colors">
            Términos y condiciones
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
