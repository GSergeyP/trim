import type { TAttrButton } from "@/shared/ui/button";

const attr: TAttrButton = {
  title: {
    xx: "Войти",
    xl: "Войти",
    lg: "Войти",
    md: "Войти",
    sm: "Войти",
  },
  gridRow: "1 / 2",
  gridColumn: {
    xx: "5 / 6",
    xl: "5 / 6",
    lg: "5 / 6",
    md: "4 / 5",
    sm: "5 / 6",
    xs: "4 / 5",
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
    title: "Man",
    width: "20px",
    height: "20px",
    fill: "var(--black)",
  },
};

export { attr };
