"use client";

import { usePathname, useRouter } from "next/navigation";
import { navigateToSection } from "@/app/utils/navigation";
import type { NavItem } from "@/types/types";

const year = new Date().getFullYear();

const NAV_LINKS: NavItem[] = [
  { name: "Inicio", href: "#intro", icon: () => null },
  { name: "Experiencia", href: "#skills", icon: () => null },
  { name: "Proyectos", href: "#projects", icon: () => null },
  { name: "Contacto", href: "#contact", icon: () => null },
];

const Footer: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <footer className="bg-background text-foreground text-center p-6 border-t border-border">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-sm text-muted-foreground">
          &copy; {year} TomiNavel. Todos los derechos reservados.
        </p>

        <nav className="flex gap-4 mt-4 md:mt-0">
          {NAV_LINKS.map(({ name, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => navigateToSection(e, href, pathname, router)}
              className="text-sm hover:text-accent transition-colors"
            >
              {name}
            </a>
          ))}
        </nav>

        <p className="text-sm text-muted-foreground mt-4 md:mt-0">
          <a
            href="/terminos"
            className="underline hover:text-accent transition-colors"
          >
            Términos y condiciones
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
