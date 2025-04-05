"use client";

import { navigateToSection } from "@/app/utils/navigation";
import React, { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "@/hooks/useTranslation";
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
import type { NavItem as NavItemType } from "@/types/types";

const NAV_MENU: NavItemType[] = [
  { key: "home", icon: RectangleStackIcon, href: "#intro" },
  { key: "experience", icon: LightBulbIcon, href: "#skills" },
  { key: "projects", icon: FolderIcon, href: "#projects" },
  { key: "contact", icon: CommandLineIcon, href: "#contact" },
];

type NavItemProps = {
  children: React.ReactNode;
  href: string;
};

function NavItem({ children, href }: NavItemProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <li>
      <Typography
        as="span"
        variant="paragraph"
        onClick={(e) => navigateToSection(e, href, pathname, router)}
        className="flex items-center gap-2 font-medium text-foreground cursor-pointer"
        {...({} as any)}
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const t = useTranslation("navbar");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      className="border-0 sticky top-0 z-50 bg-background text-foreground"
      {...({} as any)}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold hover:text-accent transition-colors"
        >
          TomiNavel
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ key, icon: Icon, href }) => (
            <NavItem key={key} href={href}>
              <Icon className="h-5 w-5" />
              {t(key)}
            </NavItem>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>

        <IconButton
          variant="text"
          onClick={() => setOpen((cur) => !cur)}
          className="ml-auto inline-block lg:hidden text-foreground"
          {...({} as any)}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-border px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ key, icon: Icon, href }) => (
              <NavItem key={key} href={href}>
                <Icon className="h-5 w-5" />
                {t(key)}
              </NavItem>
            ))}
          </ul>

          {/* Separador visual */}
          <hr className="my-4 border-border" />

          {/* Bloque de controles */}
          <div className="flex justify-between items-center px-2 pb-4">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
