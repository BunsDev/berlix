"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// Define custom types for motion animations
type AnimationVariant = {
  y?: number | string;
  color?: string;
  transition?: {
    type?: "spring" | "tween" | "keyframes";
    stiffness?: number;
    damping?: number;
    staggerChildren?: number;
  };
};

type CustomVariants = {
  initial: AnimationVariant;
  animate: AnimationVariant;
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  className?: string;
}

const containerVariants: CustomVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterVariants: CustomVariants = {
  initial: {
    y: 0,
    color: "inherit",
  },
  animate: {
    y: "-120%", // Using string is allowed in motion v12
    color: "var(--color-zinc-500)",
    transition: {
      // Fix the type issue by using correct type names
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  },
};

export const Input = ({
  label,
  className = "",
  value,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const showLabel = isFocused || value.length > 0;

  return (
    <div className={cn("relative", className)}>
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 pointer-events-none text-zinc-900 dark:text-zinc-50"
        variants={containerVariants}
        initial="initial"
        animate={showLabel ? "animate" : "initial"}
      >
        {label.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block text-sm"
            variants={letterVariants}
            style={{ willChange: "transform" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>

      <input
        type="text"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
        className="outline-none border-b-2 border-zinc-900 dark:border-zinc-50 py-2 w-full text-base font-medium text-zinc-900 dark:text-zinc-50 bg-transparent placeholder-transparent"
      />
    </div>
  );
};
