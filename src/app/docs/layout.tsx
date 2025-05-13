import { ReactNode } from "react";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex-col bg-neutral-950">
      <header className="h-16 text-white">header</header>
      <div className="mx-auto max-w-[1536px] text-white flex space-x- h-full">
        <div className="w-[300px] h-[calc(100dvh-64px)]">navigation</div>
        <main className="flex-1">{children}</main>
        <div className="w-[300px] h-full border">aside</div>
      </div>
    </div>
  );
}
