import type { TAttrNavBlock, TAttrNavLink } from "@/features/nav";
import type { TAttrIcon } from "@/shared/ui/icon";

const navBlockAttr: TAttrNavBlock = {
  gridRow: {
    xx: "1 / 2",
    xl: "1 / 2",
    lg: "3 / 4",
    md: "3 / 4",
  },
  gridColumn: {
    xx: "4 / 5",
    xl: "4 / 5",
    lg: "1 / 7",
    md: "1 / 6",
  },
  position: {
    sm: "absolute",
    xs: "absolute",
  },
  top: {
    sm: "60px",
    xs: "60px",
  },
  display: "flex",
  flexDirection: {
    xx: "row",
    xl: "row",
    lg: "row",
    md: "row",
    sm: "column",
    xs: "column",
  },
  justifyContent: {
    xx: "start",
    xl: "start",
    lg: "center",
    md: "center",
  },
  alignItems: {
    xx: "center",
    xl: "center",
    lg: "center",
    md: "center",
  },
  columnGap: "45px",
  marginLeft: {
    xx: "18px",
    xl: "18px",
  },
  borderTop: {
    sm: "1px solid var(--light-grey)",
    xs: "1px solid var(--light-grey)",
  },
  width: {
    sm: "100%",
    xs: "100%",
  },
  bgColor: {
    sm: "var(--white)",
    xs: "var(--white)",
  },
};

const navLinkAttr: TAttrNavLink = {
  variant: "primary",
  display: {
    xx: "inline-block",
    xl: "inline-block",
    lg: "inline-block",
    md: "inline-block",
    sm: "flex",
    xs: "flex",
  },
  flexDirection: {
    sm: "row-reverse",
    xs: "row-reverse",
  },
  justifyContent: {
    sm: "space-between",
    xs: "space-between",
  },
  alignItems: {
    sm: "center",
    xs: "center",
  },
  padding: {
    sm: "26px 52px",
    xs: "26px 25px 26px 42px",
  },
  borderBottom: {
    sm: "1px solid var(--light-grey)",
    xs: "1px solid var(--light-grey)",
  },
  color: "var(--black)",
  class: "gthm-rglr-15",
};

const navIconAttr: TAttrIcon = {
  title: "Arrow",
  variant: "primary",
  width: "auto",
  height: "15px",
};

export { navBlockAttr, navLinkAttr, navIconAttr };
