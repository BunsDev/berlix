"use client";

import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  label: string;
}

const Button = ({ label, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn("px-4 py-2 border rounded hover:opacity-95", className)}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
