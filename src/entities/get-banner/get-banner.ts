import { api } from "@/shared/api";
import { data } from "./get-banner.data";
import { devEnvironment } from "@/shared/consts/dev-environment.const";
import type { IGEtApi } from "@/shared/api";

const getBanner = (props: Record<string, string>) => {
  let getData;
  if (devEnvironment.DEV)
    getData = { ...data, sendData: "mock-banner-" + props.sendData } as IGEtApi;
  else getData = { ...data, sendData: props.sendData } as IGEtApi;

  return api(getData);
};

export { getBanner };
