import React from "react";
import CodeCopy from "./code-copy";

export const Cli = ({ command }: { command: string }) => {
  return (
    <div className="w-full rounded-lg bg-zinc-950 p-4 relative">
      <CodeCopy code={command} />
      <span className="font-medium font-mono text-sm text-white">
        {command}
      </span>
    </div>
  );
};
