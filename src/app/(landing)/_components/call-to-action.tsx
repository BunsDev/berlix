import { Cli } from "@/components/site/cli";
import React from "react";

export const CallToAction = () => {
  return (
    <div className="mt-20 flex items-center justify-between gap-20">
      <div className="flex-1 flex flex-col items-center text-center">
        <h1 className="font-bold flex flex-col text-3xl text-zinc-900 dark:text-zinc-50 capitalize tracking-tight leading-[1.3]">
          Copy. Paste. Use.
        </h1>
        <p className="text-xl font-medium text-zinc-700 dark:text-zinc-300 mt-2 max-w-[32ch]">
          Instantly copy - paste components or install via CLI. No setup
          required.
        </p>

        <div className="mt-16 w-full max-w-[750px] border border-zinc-200 dark:border-zinc-800 rounded-lg">
          <Cli
            command={`add "https://berlix.vercel.app/registry/text-reveal.json"`}
          />
        </div>
      </div>
    </div>
  );
};
