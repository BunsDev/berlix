import type { MDXComponents } from "mdx/types";
import { createSlug } from "./lib/utils";

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
  };
}
