import clsx from "clsx";
import { ClassNameValue, twMerge } from "tailwind-merge";

export const cn = (...classNames: ClassNameValue[]) => {
  return twMerge(clsx(...classNames));
};
