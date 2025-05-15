import type { MDXComponents } from "mdx/types";
import { cn, createSlug } from "./lib/utils";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    h1: ({ children, ...props }: React.ComponentProps<"h1">) => {
      const id = createSlug(children?.toString() || "");
      return (
        <h1 id={id} {...props}>
          {children}
        </h1>
      );
    },

    h2: ({ children, ...props }: React.ComponentProps<"h2">) => {
      const id = createSlug(children?.toString() || "");
      return (
        <h2 id={id} {...props}>
          {children}
        </h2>
      );
    },

    h3: ({ children, ...props }: React.ComponentProps<"h3">) => {
      const id = createSlug(children?.toString() || "");
      return (
        <h3 id={id} {...props}>
          {children}
        </h3>
      );
    },

    table: ({ className, ...props }: React.ComponentProps<"table">) => (
      <div className="not-prose relative w-full table-auto overflow-auto rounded-lg border border-zinc-200 text-sm dark:border-zinc-800">
        <table className={cn("w-full", className)} {...props} />
      </div>
    ),
    thead: ({ className, ...props }: React.ComponentProps<"thead">) => (
      <thead
        className={cn(
          "bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100",
          className
        )}
        {...props}
      />
    ),
    tbody: ({ className, ...props }: React.ComponentProps<"tbody">) => (
      <tbody
        className={cn(
          "divide-y divide-zinc-200 dark:divide-y dark:divide-zinc-600",
          className
        )}
        {...props}
      />
    ),
    tr: ({ className, ...props }: React.ComponentProps<"tr">) => (
      <tr className={cn("h-10", className)} {...props} />
    ),
    th: ({ className, ...props }: React.ComponentProps<"th">) => (
      <th
        className={cn("px-4 pb-0 text-left align-middle font-[450]", className)}
        {...props}
      />
    ),
    td: ({ className, ...props }: React.ComponentProps<"td">) => (
      <td
        className={cn("px-4 py-2 text-left align-middle", className)}
        {...props}
      />
    ),
  };
}
