"use client";

import { JSX } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useTranslation } from "@/hooks/useTranslation";

const TermsAndConditions = (): JSX.Element => {
  const t = useTranslation("terms");

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
        <p className="text-muted mb-4">{t("intro")}</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          {t("sections.intellectual.title")}
        </h2>
        <p className="text-muted">{t("sections.intellectual.content")}</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          {t("sections.usage.title")}
        </h2>
        <p className="text-muted">{t("sections.usage.content")}</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          {t("sections.liability.title")}
        </h2>
        <p className="text-muted">{t("sections.liability.content")}</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          {t("sections.cookies.title")}
        </h2>
        <p className="text-muted">{t("sections.cookies.content")}</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          {t("sections.modifications.title")}
        </h2>
        <p className="text-muted">{t("sections.modifications.content")}</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          {t("sections.contact.title")}
        </h2>
        <p className="text-muted">{t("sections.contact.content")}</p>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
