import { Device } from "./useDevice.const";

type TDevice = (typeof Device)[keyof typeof Device];

export type { TDevice };
