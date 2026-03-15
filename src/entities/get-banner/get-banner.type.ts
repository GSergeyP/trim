import { GetBannerPosition } from "./get-banner.const";

type TGetBannerPosition =
  (typeof GetBannerPosition)[keyof typeof GetBannerPosition];

export type { TGetBannerPosition };
