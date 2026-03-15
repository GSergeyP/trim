import type { TAttrNavBlock, TAttrNavLink } from "@/features/nav";

const navBlockAttr: TAttrNavBlock = {
  marginTop: {
    xx: "55px",
    xl: "55px",
    lg: "60px",
    md: "15px",
    sm: "28px",
    xs: "28px",
  },
  display: "flex",
  flexDirection: {
    xx: "row",
    xl: "row",
    lg: "row",
    md: "row",
    sm: "row",
    xs: "column",
  },
  justifyContent: {
    xx: "center",
    xl: "center",
    lg: "center",
    md: "center",
    sm: "center",
  },
  alignItems: {
    xx: "end",
    xl: "end",
    lg: "end",
    md: "end",
    sm: "end",
  },
  columnGap: {
    xx: "37px",
    xl: "37px",
    lg: "22px",
    md: "25px",
    sm: "20px",
  },
  rowGap: {
    md: "10px",
    sm: "20px",
    xs: "26px",
  },
  marginLeft: {
    xs: "10px",
  },
  padding: {
    md: "0 30px",
  },
  style: {
    md: "flexWrap: wrap;",
    sm: "flexWrap: wrap;",
  },
};

const navLinkAttr: TAttrNavLink = {
  variant: "primary",
  color: "var(--black)",
  class: "gthm-bld-15",
};

export { navBlockAttr, navLinkAttr };
