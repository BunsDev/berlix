"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center rounded-md border p-2 text-sm transition-colors border-zinc-700 text-zinc-700 dark:border-zinc-300 dark:text-zinc-300"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};
