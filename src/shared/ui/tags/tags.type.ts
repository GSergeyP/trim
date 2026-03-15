import type {
  IStyleProperty,
  IVariant,
  ITitle,
} from "@/shared/lib/useAttribute";

type TAttrTags = Omit<IStyleProperty, "fill" | "stroke"> & IVariant;

type TDataTags = ITitle;

interface ITags {
  tags:
    | "header"
    | "footer"
    | "article"
    | "section"
    | "fieldset"
    | "hgroup"
    | "div"
    | "span"
    | "nav"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "ul"
    | "li"
    | "nav";
  attr: TAttrTags;
  data?: TDataTags;
  children?: React.ReactElement | React.ReactElement[] | string;
  onMouseOver?: React.MouseEventHandler<HTMLElement>;
  onMouseOut?: React.MouseEventHandler<HTMLElement>;
}

export type { ITags, TAttrTags, TDataTags };
