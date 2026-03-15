import type { TAttrIcon } from "@/shared/ui/icon";
import { ROUTES } from "@/shared/model/routes";
import type {
  IStyleProperty,
  IVariant,
  ITitle,
} from "@/shared/lib/useAttribute";

type TAttrLink = Omit<IStyleProperty, "fill" | "stroke"> &
  IVariant & { icon?: TAttrIcon };

interface IDataLink extends ITitle {
  to: keyof typeof ROUTES;
}

interface ILink {
  data: IDataLink;
  attr: TAttrLink;
  children?: React.ReactElement | React.ReactElement[] | string;
  onClick?: () => void;
}

export type { ILink, TAttrLink, IDataLink };
