import { ThemeSwitcher } from "@/components/site/theme";
import { ReactNode } from "react";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex-col bg-white dark:bg-neutral-950 text-neutral-800 dark:text-white">
      <header className="h-16">
        header
        <ThemeSwitcher />
      </header>
      <div className="mx-auto max-w-[1536px] text-white flex space-x- h-full">
        <div className="w-[300px] h-[calc(100dvh-64px)]">navigation</div>
        <main className="flex-1">{children}</main>
        <div className="w-[300px] h-full border">aside</div>
      </div>
    </div>
  );
}
