import type { TAttrButton } from "@/shared/ui/button";

const attr: TAttrButton = {
  title: {
    xx: "Корзина",
    xl: "Корзина",
    lg: "Корзина",
    md: "Корзина",
    sm: "Корзина",
  },
  gridRow: "1 / 2",
  gridColumn: {
    xx: "6 / 7",
    xl: "6 / 7",
    lg: "6 / 7",
    md: "5 / 6",
    sm: "6 / 7",
    xs: "5 / 6",
  },
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "start",
  alignItems: "center",
  columnGap: "10px",
  margin: "auto 0",
  height: "50px",
  color: "var(--dark-grey)",
  class: "gthm-rglr-14",
  icon: {
    title: "Cart",
    width: "24px",
    height: "24px",
    fill: "var(--black)",
  },
};

export { attr };
