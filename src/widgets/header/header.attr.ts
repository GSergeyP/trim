import type { TAttrTags } from "@/shared/ui/tags";

const attr: TAttrTags = {
  position: "relative",
  display: "grid",
  gridTemplate: {
    xx: "60px 60px 20px / 140px 220px 158px 1fr 75px 145px",
    xl: "60px 60px 20px / 140px 160px 158px 1fr 75px 98px 20px",
    lg: "60px 60px 40px / 110px 160px 158px 1fr 75px 98px 0",
    md: "60px 60px 40px / 100px 188px 1fr 75px 98px 0",
    sm: "60px 70px / 45px 55px 90px 1fr 75px 112px",
    xs: "60px 45px 60px / 34px 1fr 65px 35px 45px",
  },
  columnGap: {
    xx: "30px",
    xl: "28px",
    lg: "34px",
    md: "22px",
    sm: "10px",
    xs: "10px",
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
  bg: {
    sm: "linear-gradient(to bottom, var(--white) 60px, var(--light-grey) 60px",
    xs: "linear-gradient(to bottom, var(--white) 60px, var(--light-grey) 60px",
  },
  zIndex: '1',
  style: {
    xx: "boxShadow: 0px 1px 2px 0px var(--grey);",
    xl: "boxShadow: 0px 1px 2px 0px var(--grey);",
    lg: "boxShadow: 0px 1px 2px 0px var(--grey);",
    md: "boxShadow: 0px 1px 2px 0px var(--grey);",
  },
};

export { attr };
