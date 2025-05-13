import { ReactNode } from "react";
import Header from "@/components/site/header";
import Sidebar from "@/components/site/sidebar";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex-col bg-white dark:bg-neutral-950 text-neutral-800 dark:text-white relative">
      <Header />
      <div className="mx-auto max-w-[1536px] text-white flex flex-1">
        <Sidebar />
        <main className="flex-1">{children}</main>
        <div className="w-[300px] h-full border">aside</div>
      </div>
    </div>
  );
}
