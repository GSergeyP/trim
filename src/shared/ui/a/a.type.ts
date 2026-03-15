import type {
  IStyleProperty,
  IVariant,
  ITitle,
} from "@/shared/lib/useAttribute";
import type { TAttrIcon } from "../icon";

type TAttrA = Omit<IStyleProperty, "fill" | "stroke"> &
  IVariant & { icon?: TAttrIcon };

type TDataA = ITitle & { href: string };

interface IA {
  attr: TAttrA;
  data: TDataA;
  children?: React.ReactElement | React.ReactElement[] | string;
}

export type { IA, TAttrA, TDataA };
