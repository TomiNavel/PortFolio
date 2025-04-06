"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

const CookiesBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const t = useTranslation("cookies");

  useEffect(() => {
    const cookiesAccepted = Cookies.get("cookiesAccepted");
    if (!cookiesAccepted) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookiesAccepted", "true", { expires: 365 }); // Expira en 1 año
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div className="fixed bottom-0 left-0 w-full bg-foreground text-background p-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          {t("message")}{" "}
          <Link
            href="/politica-cookies"
            className="underline text-accent hover:opacity-80"
          >
            {t("policy")}
          </Link>
          .
        </p>
        <button
          onClick={acceptCookies}
          className="bg-accent text-accent-foreground px-4 py-2 text-sm rounded-md mt-2 md:mt-0 hover:opacity-90 transition"
        >
          {t("accept")}
        </button>
      </div>
    )
  );
};

export default CookiesBanner;
