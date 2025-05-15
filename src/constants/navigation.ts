type NavigationChild = {
  label: string;
  href: string;
};
type NavigationItem = {
  label: string;
  children: NavigationChild[];
};

export const navigation: NavigationItem[] = [
  {
    label: "Get Started",
    children: [{ label: "Introduction", href: "/docs" }],
  },
  {
    label: "Core Components",
    children: [
      { label: "Button", href: "/docs/button" },
      { label: "Text Scramble", href: "/docs/text-scramble" },
    ],
  },
];
