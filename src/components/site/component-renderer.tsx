"use client";
import { cn } from "@/lib/utils";

type ComponentPreviewProps = {
  component: React.ReactElement;
  hasReTrigger?: boolean;
  className?: string;
};

export function ComponentRenderer({
  component,
  className,
}: ComponentPreviewProps) {
  return (
    <div
      className={cn(
        "group flex min-h-[200px] w-full items-center justify-center rounded-lg p-4",
        className
      )}
    >
      <div className="absolute top-3 right-4">
        <div className="flex items-center gap-3 opacity-0 transition-opacity group-hover:opacity-100">
          hello
        </div>
      </div>
      {component}
    </div>
  );
}
