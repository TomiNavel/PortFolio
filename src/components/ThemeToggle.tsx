"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeToggle: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`w-14 h-8 flex items-center rounded-full px-1 transition-colors duration-300
        ${isDark ? "bg-accent" : "bg-muted"}`}
      aria-label="Cambiar tema"
    >
      <div
        className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-300
          ${isDark ? "translate-x-6 bg-accent-foreground" : "translate-x-0 bg-background"}`}
      />
    </button>
  );
};

export default ThemeToggle;
