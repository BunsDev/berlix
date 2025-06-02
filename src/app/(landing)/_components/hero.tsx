"use client";

import { motion } from "motion/react";
import { GitHubIcon } from "@/assets/icons/github";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="mt-20 flex justify-between gap-20">
      <div className="flex-1">
        <h1 className="font-bold flex flex-col text-5xl text-zinc-900 dark:text-zinc-50 capitalize tracking-tight leading-[1.3]">
          <span className="inline-block">
            Breathe{" "}
            <span className="bg-gradient-to-r from-orange-500 to-rose-600 bg-clip-text text-transparent">
              Motion
            </span>
          </span>
          <span className="inline-block">
            into your{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 via-violet-600 to-blue-600 bg-clip-text text-transparent">
              Components
            </span>
          </span>
        </h1>
        <p className="text-xl font-medium text-zinc-700 dark:text-zinc-300 mt-2 max-w-[32ch]">
          Motion-first components for React, built with Tailwind CSS and Motion.
        </p>
        <div className="mt-12 flex items-center gap-4">
          <motion.button
            whileHover="hover"
            className="cursor-pointer flex items-center gap-2 px-8 h-12 py-3 rounded-full bg-zinc-950 text-zinc-50 font-medium dark:bg-zinc-50 dark:text-zinc-900"
          >
            <span>Get Started</span>
            <motion.div variants={{ hover: { x: 5 } }}>
              <ArrowRight />
            </motion.div>
          </motion.button>
          <button className="cursor-pointer flex items-center gap-2 h-12 px-8 py-3 rounded-full border-2 border-zinc-950 dark:text-zinc-50 font-medium dark:border-zinc-50 text-zinc-900">
            <GitHubIcon className="size-4 fill-zinc-950 dark:fill-zinc-50" />
            Star on GitHub
          </button>
        </div>
      </div>
      <div className="flex-1">{/* TODO: image */}</div>
    </div>
  );
};
