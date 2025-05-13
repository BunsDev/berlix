import { ReactNode } from "react";
import Header from "@/components/site/header";
import Sidebar from "@/components/site/sidebar";
import { ScrollArea } from "@/components/site/scroll-area";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex-col bg-white dark:bg-neutral-950 text-neutral-800 dark:text-white relative">
      <Header />
      <div className="mx-auto max-w-[1536px] text-white flex flex-1">
        <Sidebar />
        <main className="flex-1">{children}</main>
        <aside className="w-[300px] h-[calc(100dvh-65px)] sticky top-[65px]">
          <ScrollArea className="w-full h-full">aside</ScrollArea>
        </aside>
      </div>
    </div>
  );
}
