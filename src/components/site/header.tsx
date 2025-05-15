import React from "react";
import { ThemeSwitcher } from "./theme";

const Header = () => {
  return (
    <div className="w-full sticky top-0 z-20 bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800">
      <header className="mx-auto max-w-[1536px] h-14 px-6 flex items-center justify-between">
        <span className="font-semibold text-base text-zinc-900 dark:text-zinc-100">
          Berlix UI
        </span>
        <ThemeSwitcher />
      </header>
    </div>
  );
};

export default Header;
