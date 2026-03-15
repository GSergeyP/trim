import type {
  IStyleProperty,
  IVariant,
  ITitle,
} from "@/shared/lib/useAttribute";
import type { TAttrIcon } from "@/shared/ui/icon";

type TAttrButton = Omit<IStyleProperty, "fill" | "stroke"> &
  IVariant &
  ITitle & { icon?: TAttrIcon };

type TDataButton = string | Record<string, any>;

interface IButton {
  attr: TAttrButton;
  data?: TDataButton;
  children?: React.ReactElement | React.ReactElement[];
  onClick: (data?: TDataButton) => void;
}

export type { TDataButton, TAttrButton, IButton };
