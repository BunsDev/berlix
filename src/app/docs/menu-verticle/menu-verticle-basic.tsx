import { MenuVerticle } from "@/components/core/menu-verticle";

const MenuVerticleBasic = () => {
  return (
    <MenuVerticle
      menuItems={[
        {
          label: "Home",
          href: "#",
        },
        {
          label: "Pricing",
          href: "#",
        },
        {
          label: "Docs",
          href: "#",
        },
        {
          label: "About Us",
          href: "#",
        },
        {
          label: "Contact",
          href: "#",
        },
      ]}
    />
  );
};

export default MenuVerticleBasic;
