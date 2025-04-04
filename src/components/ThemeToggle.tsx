"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`w-14 h-8 flex items-center rounded-full px-1 transition-colors duration-300
        ${isDark ? "bg-blue-600" : "bg-gray-300"}`}
      aria-label="Cambiar tema"
    >
      <div
        className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300
          ${isDark ? "translate-x-6" : "translate-x-0"}`}
      />
    </button>
  );
};

export default ThemeToggle;
