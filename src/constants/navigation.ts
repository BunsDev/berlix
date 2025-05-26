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
    children: [{ label: "Button", href: "/docs/button" }],
  },
  {
    label: "Text Effects",
    children: [
      { label: "Text Scramble", href: "/docs/text-scramble" },
      { label: "Text Ripple", href: "/docs/text-ripple" },
    ],
  },
  {
    label: "Navigation",
    children: [{ label: "Menu Vertical", href: "/docs/menu-vertical" }],
  },
  {
    label: "Cards",
    children: [
      { label: "Flip Card", href: "/docs/flip-card" },
      { label: "Tilt Card", href: "/docs/tilt-card" },
    ],
  },
];
