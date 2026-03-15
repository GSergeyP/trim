import type { IQueryHTML } from "./fetch-get";

interface IGEtApi extends IQueryHTML {
  method: "GET";
}

interface IPOSTApi {
  method: "POST";
  URL: string;
  sendData: Record<string, any>;
}

type TApi = IGEtApi | IPOSTApi;

export type { TApi, IGEtApi };
