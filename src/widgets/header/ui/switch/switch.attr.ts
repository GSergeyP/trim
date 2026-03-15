import type { TAttrButton } from "@/shared/ui/button";

const offAttr: TAttrButton = {
  gridRow: "1 / 2",
  gridColumn: "1 / 2",
  margin: "auto 0 auto auto",
  width: "24px",
  height: "24px",
  icon: {
    title: "Hamburger",
    width: "24px",
    height: "24px",
    fill: "var(--black)",
  },
};

const onAttr: TAttrButton = {
  gridRow: "1 / 2",
  gridColumn: "1 / 2",
  margin: "auto 0 auto auto",
  width: "24px",
  height: "24px",
  icon: {
    title: "Cross",
    width: "24px",
    height: "24px",
    fill: "var(--black)",
  },
};

export { onAttr, offAttr };
