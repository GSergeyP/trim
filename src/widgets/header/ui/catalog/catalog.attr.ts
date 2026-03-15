import type { TAttrButton } from "@/shared/ui/button";

const attr: TAttrButton = {
  variant: "secondary",
  title: "Каталог",
  gridRow: {
    xx: "2 / 3",
    xl: "2 / 3",
    lg: "2 / 3",
    md: "2 / 3",
    sm: "2 / 3",
    xs: "3 / 4",
  },
  gridColumn: {
    xx: "2 / 3",
    xl: "2 / 3",
    lg: "2 / 3",
    md: "2 / 3",
    sm: "1 / 4",
    xs: "1 / 6",
  },
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "center",
  alignItems: "center",
  columnGap: "16px",
  borderRadius: "4px",
  margin: {
    sm: "auto auto auto 20px",
    xs: "0 auto",
  },
  width: {
    xx: "220px",
    xl: "156px",
    lg: "165px",
    md: "193px",
    sm: "180px",
    xs: "95%",
  },
  height: "50px",
  color: "var(--white)",
  class: "gthm-bld-16",
  icon: {
    title: "Burger",
    width: "24px",
    height: "24px",
    fill: "var(--white)",
  },
};

export { attr };
