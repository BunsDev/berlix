import React from "react";
import { ThemeSwitcher } from "./theme";

const Header = () => {
  return (
    <div className="w-full sticky top-0 z-20 bg-white dark:bg-zinc-950 border-b border-gray-300 dark:border-zinc-800">
      <header className="mx-auto max-w-[1536px] h-16">
        header
        <ThemeSwitcher />
      </header>
    </div>
  );
};

export default Header;
