import type { IStyleProperty, IVariant } from "@/shared/lib/useAttribute";
import type { TDevice } from "@/shared/lib/useDevice";

interface IDataImg {
  src: string | { [key in TDevice]: string };
  alt: string;
}

type TAttrImg = Omit<IStyleProperty, "fill" | "stroke"> & IVariant;

interface IImg {
  data: IDataImg;
  attr: TAttrImg;
}

export type { IImg, IDataImg, TAttrImg };
