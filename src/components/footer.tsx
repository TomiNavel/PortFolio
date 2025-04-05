"use client";

import { usePathname, useRouter } from "next/navigation";
import { navigateToSection } from "@/app/utils/navigation";
import type { NavItem } from "@/types/types";
import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";

const year = new Date().getFullYear();

const NAV_LINKS: NavItem[] = [
  { key: "home", href: "#intro", icon: () => null },
  { key: "experience", href: "#skills", icon: () => null },
  { key: "projects", href: "#projects", icon: () => null },
  { key: "contact", href: "#contact", icon: () => null },
];

const Footer: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslation("footer");

  return (
    <footer className="bg-background text-foreground text-center p-6 border-t border-border">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-sm text-muted-foreground">
          &copy; {year} TomiNavel. {t("rights")}
        </p>

        <nav className="flex gap-4 mt-4 md:mt-0">
          {NAV_LINKS.map(({ key, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => navigateToSection(e, href, pathname, router)}
              className="text-sm hover:text-accent transition-colors"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
        </nav>

        <p className="text-sm text-muted-foreground mt-4 md:mt-0">
          <Link
            href="/terminos"
            className="underline hover:text-accent transition-colors"
          >
            {t("terms")}
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
