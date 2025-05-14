import { extractCode } from "@/lib/code";
import { CodeRenderer } from "./code-renderer";
import type { BuiltinLanguage } from "shiki";

import { cn } from "@/lib/utils";
import CodeCopy from "./code-copy";

type CodeBlockProps = {
  filePath?: string;
  code?: string;
  lang?: BuiltinLanguage;
};

export const CodeBlock = ({
  filePath,
  code = "",
  lang = "tsx",
}: CodeBlockProps) => {
  const fileContent = filePath ? extractCode(filePath) : code;

  return (
    <div className="relative w-full">
      <CodeCopy code={fileContent} />
      <div
        className={cn(
          "not-prose relative max-h-[400px] thin-scroll overflow-auto  w-full rounded-lg text-sm bg-zinc-950"
        )}
      >
        <CodeRenderer code={fileContent} lang={lang} />
      </div>
    </div>
  );
};
