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
    xx: "1 / 2",
    xl: "2 / 3",
    lg: "2 / 3",
    md: "2 / 3",
    sm: '1 / 2'
  },
  position: 'relative',
  margin: {
    xx: "auto 0 0 auto",
    xl: "auto 0 0 auto",
    lg: "auto 0 0 auto",
    md: "auto 0 0 auto",
    sm: "auto 0 0 auto",
  },
  width: {
    xx: "460px",
    xl: "460px",
    lg: "364px",
    md: "430px",
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
  bg: "green",
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
  right: {
    xx: '314px',
    xl: '318px',
    lg: '218px',
    md: '286px',
  },
  left: {
    sm: '38px'
  },
  paddingBottom: {
    xx: '4px',
    xl: '4px',
    lg: '3px',
    md: '0'
  },
  borderBottom: '2px solid',
  class: 'gthm-bld-16'
};

export { blockAttr, linkAttr };
