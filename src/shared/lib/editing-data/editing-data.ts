import type { TEditingData } from "./editing-data.type";
import { devEnvironment } from "@/shared/consts/dev-environment.const";

const editingData = (data: TEditingData) => {
  let sendData = undefined;

  if (data) {
    sendData = data;
    if (devEnvironment.DEV) sendData += ".json";
  } else if (data === null) sendData = data;

  return { sendData: sendData };
};

export { editingData };
