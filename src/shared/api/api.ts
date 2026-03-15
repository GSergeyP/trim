import type { TApi } from "./api.type";
import { FetchGet } from "./fetch-get";

const api = (props: TApi) => {
  const { method, URL, sendData } = props;

  switch (method) {
    case "POST":
      return {};
    default:
      return FetchGet({ URL, sendData });
  }
};

export { api };
