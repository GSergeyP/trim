import type { TAttrButton } from "@/shared/ui/button";

const attr: TAttrButton = {
  gridRow: {
    xx: "1 / 2",
    xl: "1 / 2",
    lg: "1 / 2",
    md: "1 / 2",
    sm: "1 / 2",
    xs: "2 / 3",
  },
  gridColumn: {
    xx: "2 / 3",
    xl: "2 / 3",
    lg: "2 / 3",
    md: "2 / 3",
    sm: "3 / 6",
    xs: "1 / 3",
  },
  margin: {
    xx: "auto auto auto 0",
    xl: "auto auto auto 0",
    lg: "auto auto auto 0",
    md: "auto auto auto 0",
    sm: "auto auto auto 15px",
    xs: "auto auto auto 10px",
  },
  width: "fit-content",
  color: "var(--black)",
  class: "gthm-lght-14",
  icon: {
    title: "Mark",
    marginLeft: "6px",
    width: "8px",
    height: "8px",
    stroke: "var(--black)",
  },
};

export { attr };
