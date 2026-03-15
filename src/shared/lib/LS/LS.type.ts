import { keyLS } from "./LS.const";

type TGetItemLS = { key: (typeof keyLS)[keyof typeof keyLS] };

type TRemoveItemLS = TGetItemLS;

type TSetItemLS = TGetItemLS & { value: string };

export type { TGetItemLS, TRemoveItemLS, TSetItemLS };
