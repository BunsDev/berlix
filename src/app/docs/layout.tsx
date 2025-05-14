import { ReactNode } from "react";
import Header from "@/components/site/header";
import Sidebar from "@/components/site/sidebar";
import { ScrollArea } from "@/components/site/scroll-area";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex-col bg-white dark:bg-neutral-950 text-neutral-800 dark:text-white relative">
      <Header />
      <div className="mx-auto max-w-[1536px] text-white flex flex-1 space-x-16">
        <Sidebar />
        <main className="flex-1 py-6  pb-16 pt-8 min-w-0">
          <div className="prose prose-zinc dark:prose-invert prose-h1:text-3xl prose-h1:font-semibold prose-h2:text-xl prose-h2:font-semibold prose-h3:text-lg prose-h3:font-medium max-w-full">
            {children}
          </div>
        </main>
        <aside className="w-[300px] h-[calc(100dvh-57px)] sticky top-[57px]">
          <ScrollArea className="w-full h-full">aside</ScrollArea>
        </aside>
      </div>
    </div>
  );
}
