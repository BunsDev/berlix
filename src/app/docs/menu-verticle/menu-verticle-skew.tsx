import { MenuVerticle } from "@/components/core/menu-verticle";

const MenuVerticleSkew = () => {
  return (
    <MenuVerticle
      color="#00c951"
      skew={-20}
      menuItems={[
        {
          label: "Blog",
          href: "#",
        },
        {
          label: "Careers",
          href: "#",
        },
        {
          label: "Support",
          href: "#",
        },
      ]}
    />
  );
};

export default MenuVerticleSkew;
