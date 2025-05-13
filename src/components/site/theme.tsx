"use client";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <button
      className="border-red-500 bg-red-300 p-2 text-white"
      onClick={handleClick}
    >
      Theme: {theme}
    </button>
  );
};
