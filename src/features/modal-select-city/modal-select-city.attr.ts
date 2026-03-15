import type { TAttrTags } from "@/shared/ui/tags";
import type { TAttrButton } from "@/shared/ui/button";

const blockAttr: TAttrTags = {
  position: "absolute",
  top: {
    xx: "20px",
    xl: "20px",
    lg: "20px",
    md: "20px",
    sm: "70px",
    xs: "70px",
  },
  left: {
    xx: "145px",
    xl: "145px",
    lg: "115px",
    md: "105px",
    sm: "5px",
    xs: "5px",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  paddingBottom: "10px",
  border: "1px solid var(--light-grey)",
  width: {
    xx: "270px",
    xl: "206px",
    lg: "218px",
    md: "222px",
    sm: "200px",
    xs: "200px",
  },
  bgColor: "var(--white)",
  style: "boxShadow: 0px 10px 20px 0px var(--light-grey);",
};

const buttonAttr: TAttrButton = {
  variant: "primary",
  margin: "10px auto 0 15px",
  class: "gthm-rglr-14",
};

export { blockAttr, buttonAttr };
