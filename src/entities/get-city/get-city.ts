import { api } from "@/shared/api";
import { data } from "./get-city.data";
import { devEnvironment } from "@/shared/consts/dev-environment.const";
import type { IGEtApi } from "@/shared/api";
import type { IGetCity } from "./get-city.type";

const getCity = (props?: IGetCity) => {
  let getData;

  if (props == undefined) {
    if (devEnvironment.DEV)
      getData = { ...data, sendData: "mock-city.json" } as IGEtApi;
    else getData = data;
  } else getData = { ...data, sendData: props.sendData } as IGEtApi;

  return api(getData);
};

export { getCity };
