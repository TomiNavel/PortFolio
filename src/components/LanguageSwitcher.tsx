import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => setLocale("es")}
        className={`transition-opacity ${locale === "es" ? "opacity-100" : "opacity-50 hover:opacity-80"}`}
        aria-label="Español"
      >
        <Image
          src="/images/flag-es.svg"
          alt="Español"
          width={24}
          height={24}
          className="rounded-full"
        />
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`transition-opacity ${locale === "en" ? "opacity-100" : "opacity-50 hover:opacity-80"}`}
        aria-label="English"
      >
        <Image
          src="/images/flag-en.svg"
          alt="English"
          width={24}
          height={24}
          className="rounded-full"
        />
      </button>
    </div>
  );
}
