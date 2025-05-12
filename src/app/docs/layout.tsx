import { ReactNode } from "react";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex-col">
      <header className="h-20">header</header>
      <div className="px-6 lg:px-8">
        <main>{children}</main>
      </div>
    </div>
  );
}
