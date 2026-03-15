import { styleProperty } from "./useAttribute.const";
import { getAttribute, editAttribut } from "./useAttribute.lib";

const useAttribute = (
  device: string,
  data: Record<string, any>,
): Record<string, any> => {
  const style: Record<string, string | boolean> = {};
  const etc: Record<string, string | boolean> = {};

  for (const key of Object.keys(data)) {
    const attribute = getAttribute(device, data[key]);

    if (attribute) {
      if (data[key] && styleProperty[key as keyof typeof styleProperty])
        style[styleProperty[key as keyof typeof styleProperty]] = attribute;
      else if (typeof attribute === "string" && key === "style")
        etc[key] = editAttribut(attribute);
      else etc[key] = attribute;
    }
  }
  return {
    style: Object.keys(style).length === 0 ? null : style,
    etc: Object.keys(etc).length === 0 ? null : etc,
  };
};

export { useAttribute };
