import type { IStyleProperty, IVariant } from "@/shared/lib/useAttribute";
import type { IconsList } from "@/shared/assets/icons-list";

type TAttrIcon = IStyleProperty &
  IVariant & { title: (typeof IconsList)[keyof typeof IconsList] };

interface IIcon {
  attr: TAttrIcon;
}

export type { TAttrIcon, IIcon };
