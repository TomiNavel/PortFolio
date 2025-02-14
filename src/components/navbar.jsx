"use client";

import { navigateToSection } from "@/app/utils/navigation";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  LightBulbIcon,
  FolderIcon,
  CommandLineIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  { name: "Inicio", icon: RectangleStackIcon, href: "#intro" },
  { name: "Habilidades", icon: LightBulbIcon, href: "#skills" },
  { name: "Proyectos", icon: FolderIcon, href: "#projects" },
  { name: "Contacto", icon: CommandLineIcon, href: "#contact" },
];

function NavItem({ children, href }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <li>
      <Typography
        as="span"
        onClick={(e) => navigateToSection(e, href, pathname, router)}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900 cursor-pointer"
      >
        {children}
      </Typography>
    </li>
  );
}

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

export function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Izquierda: Logo */}
        <Link href="/" className="text-lg font-bold text-blue-gray-900 hover:text-gray-700">
          TomiNavel
        </Link>

        {/* Centro: Opciones principales */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>

        {/* Menú responsive en móviles */}
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      {/* Menú desplegable en móviles */}
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
