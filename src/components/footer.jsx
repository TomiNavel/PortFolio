"use client";

import { usePathname, useRouter } from "next/navigation";
import { navigateToSection } from "@/app/utils/navigation";

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <footer className="bg-gray-800 text-white text-center p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} TomiNavel. Todos los derechos reservados.</p>

        <nav className="flex gap-4 mt-4 md:mt-0">
          {["#intro", "#skills", "#projects", "#contact"].map((href) => (
            <a
              key={href}
              href={href}
              onClick={(e) => navigateToSection(e, href, pathname, router)}
              className="text-sm hover:text-gray-400 transition-colors"
            >
              {href.replace("#", "")}
            </a>
          ))}
        </nav>

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
