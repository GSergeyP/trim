import type { TAttrBannerBlock, TAttrBannerLink } from "@/features/banner";

const blockAttr: TAttrBannerBlock = {
  gridRow: {
    xx: "2 / 3",
    xl: "2 / 3",
    lg: "2 / 3",
    md: "2 / 3",
    sm: '2 / 3'
  },
  gridColumn: {
    xx: "2 / 3",
    xl: "3 / 4",
    lg: "3 / 4",
    md: "3 / 4",
    sm: '2 / 3'
  },
  position: 'relative',
  margin: {
    xx: "auto auto 0 0",
    xl: "auto auto 0 0",
    lg: "auto auto 0 0",
    md: "auto auto 0 0",
    sm: "auto auto 0 0",
  },
  width: {
    xx: "950px",
    xl: "97%",
    lg: "96%",
    md: "97%",
    sm: "93%",
    xs: "",
  },
  height: {
    xx: "356px",
    xl: "356px",
    lg: "356px",
    md: "252px",
    sm: "252px",
    xs: "",
  },
  bg: "blue",
};

const linkAttr: TAttrBannerLink = {
  variant: 'secondary',
  position: 'absolute',
  bottom: {
    xx: '38px',
    xl: '40px',
    lg: '41px',
    md: '41px',
    sm: '41px'
  },
  left: {
    xx: '40px',
    xl: '40px',
    lg: '42px',
    md: '42px',
    sm: '42px'
  },
  paddingBottom: {
    xx: '4px',
    xl: '4px',
    lg: '3px',
    md: '0',
    sm: '0'
  },
  borderBottom: '2px solid',
  class: 'gthm-bld-16'
};

export { blockAttr, linkAttr };
