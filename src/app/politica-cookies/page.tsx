"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useTranslation } from "@/hooks/useTranslation";

export default function PoliticaCookies() {
  const t = useTranslation("cookiesPage");

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12 text-foreground">
        <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
        <p className="text-muted-foreground mb-4">
          {t("intro.part1")} <strong>Cuarto y Mita</strong> {t("intro.part2")}
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          {t("section1.title")}
        </h2>
        <p className="text-muted-foreground">{t("section1.content")}</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          {t("section2.title")}
        </h2>
        <ul className="list-disc pl-6 text-muted-foreground">
          <li>
            <strong>{t("section2.essentialTitle")}</strong>{" "}
            {t("section2.essentialText")}
          </li>
          <li>
            <strong>{t("section2.analyticsTitle")}</strong>{" "}
            {t("section2.analyticsText")}
          </li>
          <li>
            <strong>{t("section2.functionalTitle")}</strong>{" "}
            {t("section2.functionalText")}
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          {t("section3.title")}
        </h2>
        <p className="text-muted-foreground">{t("section3.content")}</p>
        <ul className="list-disc pl-6 text-accent-600 underline">
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647?hl=es"
              target="_blank"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/es/kb/Borrar%20cookies"
              target="_blank"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/es-es/HT201265" target="_blank">
              Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies"
              target="_blank"
            >
              Internet Explorer/Edge
            </a>
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          {t("section4.title")}
        </h2>
        <p className="text-muted-foreground">{t("section4.content")}</p>
      </div>
      <Footer />
    </>
  );
}
