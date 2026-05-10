"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@gravity-ui/icons";

const ThemeBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = (theme === "dark") || (resolvedTheme === "dark");

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-7 shadow-[0_0_5px_#00ffff] flex items-center bg-blue-400 dark:bg-[#00ffff] rounded-full p-1 transition-all"
    >
      <div
        className={`h-5 w-6 bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300
        ${isDark ? "translate-x-4" : "translate-x-0"}`}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-gray-700 " />
        ) : (
          <Sun className="w-3.5 h-3.5 text-yellow-700" />
        )}
      </div>
    </button>
  );
};

export default ThemeBtn;