import type { TAttrBannerBlock, TAttrBannerLink } from "@/features/banner";

const blockAttr: TAttrBannerBlock = {
  gridRow: {
    xx: "1 / 2",
    xl: "1 / 2",
    lg: "1 / 2",
    md: "1 / 2",
    sm: '1 / 2'
  },
  gridColumn: {
    xx: "1 / 3",
    xl: "2 / 4",
    lg: "2 / 4",
    md: "2 / 4",
    sm: '1 / 3'
  },
  position: "relative",
  margin: {
    xx: "auto auto 0 auto",
    xl: "auto auto 0 auto",
    lg: "auto auto 0 auto",
    md: "auto auto 0 auto",
  },
  width: {
    xx: "1820px",
    xl: "100%",
    lg: "100%",
    md: "100%",
    sm: "100%",
    xs: "",
  },
  height: {
    xx: "515px",
    xl: "515px",
    lg: "515px",
    md: "535px",
    sm: "100%",
    xs: "",
  },
  bgRepeat: 'no-repeat',
  bgSize: {
    xx: '100% auto',
    xl: '100% auto',
    lg: '100% auto',
    md: '100% auto',
    sm: "contain",
  },
  bgPosition: {
    xx: '50% 20%',
    xl: '50% 20%',
    lg: '50% 20%',
    md: '50% 20%',
    sm: "50% 0",
  },
};

const linkAttr: TAttrBannerLink = {
  variant: "primary",
  position: "absolute",
  top: {
    xx: "235px",
    xl: '235px',
    lg: '235px',
    md: '235px',
    sm: '235px'
  },
  left: {
    xx: "190px",
    xl: '32px',
    lg: '32px',
    md: '32px',
    sm: '22px'
  },
  display: "flex",
  flexDirection: "row-reverse",
  columnGap: '18px',
  color: "var(--black)",
  class: "gthm-rglr-16",
  icon: {
    title: "Arrow",
    fill: "var(--blue)",
    width: "39px",
    height: "22px",
  },
};

export { blockAttr, linkAttr };
