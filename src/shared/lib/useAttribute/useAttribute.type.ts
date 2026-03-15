import { styleProperty } from "./useAttribute.const";
import type { TDevice } from "@/shared/lib/useDevice";

type TKeyDeviceValue = { [key in TDevice]?: string };
type TStyleProperty = {
  [key in keyof typeof styleProperty]?: string | TKeyDeviceValue;
};
/*------------------------------------------------------------------------------------------------------------*/
type OverrideProps<TypeTitle, T> = {
  [key in keyof TypeTitle]: key extends keyof T ? T[key] : TypeTitle[key];
};

type TPosition = "relative" | "absolute" | "static" | "sticky" | "fixed";
type TKeyPosition = { [key in TDevice]?: TPosition };
type TStylePropertyPositionOverride = OverrideProps<
  TStyleProperty,
  { position?: TPosition | TKeyPosition }
>;

type TDisplay =
  | "block"
  | "flex"
  | "grid"
  | "inline-block"
  | "table-cell"
  | "none";
type TKeyDisplay = { [key in TDevice]?: TDisplay };
type TStylePropertyDisplayOverride = OverrideProps<
  TStylePropertyPositionOverride,
  { display?: TDisplay | TKeyDisplay }
>;

type TFDirection = "column" | "row" | "column-reverse" | "row-reverse";
type TKeyFDirection = { [key in TDevice]?: TFDirection };
type TStylePropertyFDirectionOverride = OverrideProps<
  TStylePropertyDisplayOverride,
  { flexDirection?: TFDirection | TKeyFDirection }
>;

type TJContent = "start" | "end" | "center" | "space-between" | "space-around";
type TKeyJContent = { [key in TDevice]?: TJContent };
type TStylePropertyJContentOverride = OverrideProps<
  TStylePropertyFDirectionOverride,
  { justifyContent?: TJContent | TKeyJContent }
>;

type TAItems = "start" | "end" | "center" | "baseline" | "stretch";
type TKeyAItems = { [key in TDevice]?: TAItems };
type TStylePropertyAItemsOverride = OverrideProps<
  TStylePropertyJContentOverride,
  { alignItems?: TAItems | TKeyAItems }
>;

type TBgRepeat =
  | "no-repeat"
  | "repeat"
  | "repeat-x"
  | "repeat-y"
  | "inherit"
  | "space"
  | "round";
type TKeyBgRepeat = { [key in TDevice]?: TBgRepeat };
type TStylePropertyBgRepeatOverride = OverrideProps<
  TStylePropertyAItemsOverride,
  { bgRepeat?: TBgRepeat | TKeyBgRepeat }
>;

type TBgClip = "padding-box" | "border-box" | "content-box";
type TKeyBgClip = { [key in TDevice]?: TAItems };
type TStylePropertyKeyBgClipOverride = OverrideProps<
  TStylePropertyBgRepeatOverride,
  { bgClip?: TBgClip | TKeyBgClip }
>;

interface IStyleProperty extends TStylePropertyKeyBgClipOverride {
  style?: string | TKeyDeviceValue;
  class?: string | TKeyDeviceValue;
}
/*------------------------------------------------------------------------------------------------------------*/

/*************************************************************************************************************/
type TVariant = null | "primary" | "secondary" | "tertiary" | "quaternary";
type TKeyDeviceValueVariant = { [key in TDevice]?: TVariant };
interface IVariant {
  variant?: TVariant | TKeyDeviceValueVariant;
}

interface ITitle {
  title?: string | TKeyDeviceValue;
}

/*************************************************************************************************************/

export type { IStyleProperty, IVariant, ITitle };
