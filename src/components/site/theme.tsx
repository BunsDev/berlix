"use client";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <button
      className="p-1 text-black border border-black dark:border-white dark:text-white"
      onClick={handleClick}
    >
      Theme: {theme}
    </button>
  );
};
