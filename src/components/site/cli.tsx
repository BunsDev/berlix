"use client";

import React, { useState } from "react";
import CodeCopy from "./code-copy";
import { cn } from "@/lib/utils";

const PM_COMMANDS = {
  npm: "npx",
  pnpm: "pnpm dlx",
  yarn: "yarn dlx",
  bun: "bunx",
} as const;

type PackageManager = keyof typeof PM_COMMANDS;

type CliProps = {
  command: string;
};

export const Cli = ({ command }: CliProps) => {
  const [pm, setPm] = useState<PackageManager>("npm");

  const fullCommand = `${PM_COMMANDS[pm]} shadcn@latest ${command}`;

  return (
    <div className="w-full rounded-lg bg-zinc-950 relative overflow-hidden">
      {/* PM Selector */}
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-100 dark:bg-zinc-800">
        <div className="flex items-center gap-4">
          {(Object.keys(PM_COMMANDS) as PackageManager[]).map((name) => (
            <button
              key={name}
              onClick={() => setPm(name)}
              className={cn(
                "text-sm font-medium text-zinc-600 dark:text-zinc-300 cursor-pointer",
                name === pm && "text-zinc-900 dark:text-zinc-50"
              )}
            >
              {name}
            </button>
          ))}
        </div>
        <CodeCopy
          className="relative top-0 right-0 text-zinc-900 dark:text-zinc-50"
          code={fullCommand}
        />
      </div>

      <div className="text-sm text-left font-mono text-nowrap font-medium bg-zinc-950 px-4 py-4 overflow-x-auto max-w-full min-w-0">
        <span className="text-amber-400">{PM_COMMANDS[pm]}</span>{" "}
        <span className="text-teal-500">shadcn@latest</span>{" "}
        <span className="text-zinc-300">{command}</span>
      </div>
    </div>
  );
};
