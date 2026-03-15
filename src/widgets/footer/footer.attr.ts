import type { TAttrTags } from "@/shared/ui/tags";

const attr: TAttrTags = {
  display: "flex",
  flexDirection: "column",
  alignItems: {
    xx: "center",
    xl: "center",
    lg: "center",
    md: "center",
    sm: "center",
    xs: "start",
  },
  margin: {
    xx: "0 auto",
  },
  width: {
    xx: "1920px",
    xl: "100%",
    lg: "100%",
    md: "100%",
    sm: "100%",
    xs: "100%",
  },
  height: {
    xx: "190px",
    xl: "190px",
    lg: "194px",
    md: "162px",
    sm: "198px",
    xs: "520px",
  },
  bgColor: "var(--light-grey)",
};

export { attr };
