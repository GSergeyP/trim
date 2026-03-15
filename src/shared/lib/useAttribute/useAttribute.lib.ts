const getAttribute = (
  device: string,
  data: Record<string, any> | string | boolean,
): string | boolean | null => {
  let dataCurrent;
  if (data instanceof Object && data[device as keyof typeof data])
    dataCurrent = data[device as keyof typeof data];
  else if (typeof data === "string" || typeof data === "boolean")
    dataCurrent = data;
  else dataCurrent = null;
  return dataCurrent;
};

const editAttribut = (data: string) => {
  const arr = [];
  const attributesString = data.split(";");

  for (let i = 0; i < attributesString.length; i++) {
    const item = attributesString[i].trim().split(":");
    arr.push(item);
  }

  return Object.fromEntries(arr);
};

export { getAttribute, editAttribut };
