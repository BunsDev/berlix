"use client";
import { cn } from "@/lib/utils";
import { RotateCw } from "lucide-react";
import { cloneElement, useState } from "react";

type ComponentPreviewProps = {
  component: React.ReactElement;
  reTrigger?: boolean;
  className?: string;
};

export function ComponentRenderer({
  component,
  className,
  reTrigger = false,
}: ComponentPreviewProps) {
  const [key, setKey] = useState(Date.now());

  const changeKey = () => {
    setKey(Date.now());
  };

  return (
    <div
      className={cn(
        "group flex min-h-[350px] w-full items-center justify-center rounded-lg p-4 relative not-prose",
        className
      )}
    >
      {reTrigger && (
        <div className="absolute top-3 right-4">
          <button
            onClick={changeKey}
            className="cursor-pointer p-1 flex items-center gap-3 opacity-0 transition-opacity group-hover:opacity-100 text-zinc-700 dark:text-zinc-300"
          >
            <RotateCw size={16} />
          </button>
        </div>
      )}
      {reTrigger ? cloneElement(component, { key }) : component}
    </div>
  );
}
