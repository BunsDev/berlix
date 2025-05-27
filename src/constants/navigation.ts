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
      { label: "Text Reveal", href: "/docs/text-reveal" },
      { label: "Text Ripple", href: "/docs/text-ripple" },
      { label: "Text Scramble", href: "/docs/text-scramble" },
      { label: "Text Split", href: "/docs/text-split" },
    ],
  },
  {
    label: "Navigation",
    children: [
      { label: "Menu Fluid", href: "/docs/menu-fluid" },
      { label: "Menu Vertical", href: "/docs/menu-vertical" },
    ],
  },
  {
    label: "Cards",
    children: [
      { label: "Flip Card", href: "/docs/flip-card" },
      { label: "Tilt Card", href: "/docs/tilt-card" },
    ],
  },
];
