import React from "react";
import { ThemeSwitcher } from "./theme";
import Link from "next/link";
import { GitHubIcon } from "@/assets/icons/github";
import { XIcon } from "@/assets/icons/x";

const Header = () => {
  return (
    <div className="w-full sticky top-0 z-20 bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-zinc-800">
      <header className="mx-auto max-w-[1536px] h-14 px-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/">
            <span className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
              Berlix UI
            </span>
          </Link>

          <nav className="flex items-center gap-6 text-sm font-normal text-zinc-800 dark:text-zinc-200">
            <Link href="/docs">Docs</Link>
            <Link href="/docs/button">Components</Link>
          </nav>
        </div>
        <nav className="flex items-center space-x-2">
          <Link
            href="https://twitter.com/rechesoares13"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center"
          >
            <XIcon className="h-4 w-4 fill-zinc-950 dark:fill-zinc-50" />
          </Link>
          <Link
            href="https://github.com/reche13/berlix"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center"
          >
            <GitHubIcon className="h-4 w-4 fill-zinc-950 dark:fill-zinc-50" />
          </Link>
          <ThemeSwitcher />
        </nav>
      </header>
    </div>
  );
};

export default Header;
