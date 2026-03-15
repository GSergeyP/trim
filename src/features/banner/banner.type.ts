import type { TAttrTags } from "@/shared/ui/tags";
import type { TAttrLink, IDataLink } from "@/shared/ui/links";
import type { TGetBannerPosition } from "@/entities/get-banner";

type TAttrBannerBlock = TAttrTags;

type TAttrBannerLink = TAttrLink;

type TDataBannerLink = IDataLink;

interface IBanner {
  bannerBlockAttr: TAttrBannerBlock;
  bannerLinkAttr: TAttrBannerLink;
  bannerLinkData: TDataBannerLink;
  position: TGetBannerPosition;
  children?: React.ReactElement;
}

export type { IBanner, TAttrBannerBlock, TAttrBannerLink, TDataBannerLink };
