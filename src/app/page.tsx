import { GradientBars } from "@/components/core/gradient-bars";
import { TextReveal } from "@/components/core/text-reveal";
import Header from "@/components/site/header";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col h-screen items-center justify-center relative">
        <GradientBars bars={13} />
        <TextReveal
          className="font-bold text-8xl bg-gradient-to-b from-zinc-950 dark:from-zinc-50 to-zinc-400 dark:via-white dark:to-zinc-500 bg-clip-text text-transparent"
          from="bottom"
          split="letter"
        >
          Berlix UI
        </TextReveal>
        <TextReveal className="text-lg font-medium text-zinc-700 dark:text-zinc-300">
          UI Components for Design Engineers
        </TextReveal>
      </div>
    </>
  );
};

export default page;
