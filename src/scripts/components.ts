import path from "path";
import { RegistryItemSchema } from "./types";

type ComponentType = Omit<RegistryItemSchema, "files" | "type" | "author"> &
  Partial<Pick<RegistryItemSchema, "files" | "type" | "author">> & {
    path: string;
  };

export const components: ComponentType[] = [
  {
    name: "button",
    title: "Button",
    description: "A simple button component",
    path: path.join(__dirname, "../components/core/button.tsx"),
    dependencies: [],
  },
];
