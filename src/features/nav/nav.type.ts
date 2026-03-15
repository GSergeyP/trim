import type { TAttrTags } from "@/shared/ui/tags";
import type { TAttrLink, IDataLink } from "@/shared/ui/links";

type TAttrNavBlock = TAttrTags;

type TAttrNavLink = TAttrLink;

type TDataNavLink = IDataLink[];

interface INav {
  navBlockAttr: TAttrNavBlock;
  navLinkAttr: TAttrNavLink;
  navLinkData: TDataNavLink;
}

export type { INav, TAttrNavBlock, TAttrNavLink, TDataNavLink };
