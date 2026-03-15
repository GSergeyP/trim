import type { TAttrTags } from "@/shared/ui/tags";

const attr: TAttrTags = {
  display: "grid",
  gridTemplate: {
    xx: "555px 1fr / 700px 1fr",
    xl: "555px 1fr / 20px 496px 1fr 20px",
    lg: "545px 1fr / 4px 396px 1fr 4px",
    md: "555px 1fr / 2px 450px 1fr 2px",
    sm: "775px 1fr / 1fr 1fr",
    xs: "",
  },
  gap: {
    xx: "28px",
    xl: "28px",
    lg: "26px",
    md: "20px",
    sm: "20px",
    xs: "",
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
    xx: "940px",
    xl: "940px",
    lg: "924px",
    md: "828px",
    sm: "1048px",
    xs: "1466px",
  },
  bgColor: "var(--light-grey)",
};

export { attr };
