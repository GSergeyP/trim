import type { TAttrTags } from "@/shared/ui/tags";
import type { TAttrA } from "@/shared/ui/a";
import type { TAttrIcon } from "@/shared/ui/icon";

const blockAttr: TAttrTags = {
  marginTop: {
    xx: "30px",
    xl: "30px",
    lg: "30px",
    md: "13px",
    sm: "22px",
    xs: "18px",
  },
  display: "flex",
  flexDirection: "row",
  alignItems: "end",
  columnGap: "25px",
  marginLeft: {
    xs: "18px",
  },
};

const aAttr: TAttrA = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "24px",
  bgColor: "var(--white)",
  width: "30px",
  height: "30px",
  style: "boxShadow: 0px 2px 5px 0px var(--grey);",
};

const iconAttr: TAttrIcon[] = [
  {
    title: "Vk",
    width: "16.5px",
    height: "9.75px",
  },
  {
    title: "Telegram",
    width: "14.25px",
    height: "14.25px",
  },
  {
    title: "Instagram",
    width: "15.75px",
    height: "15px",
  },
];

export { blockAttr, aAttr, iconAttr };
