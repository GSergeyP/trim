import { memo, useMemo } from "react";
import { useDevice } from "@/shared/lib/useDevice";
import { useAttribute } from "@/shared/lib/useAttribute";
import type { IImg } from "./img.type";

function Img(props: IImg) {
  const { data, attr } = props;
  const device = useDevice();
  const attribute = useAttribute(device, { ...attr, ...data });

  const currentAttr = useMemo(() => {
    return { attribute };
  }, [attribute]);

  return (
    <img
      src={currentAttr.attribute.etc.src}
      alt={currentAttr.attribute.etc.alt}
      className={
        currentAttr.attribute.etc?.variant
          ? [
              "img-" + currentAttr.attribute.etc?.variant,
              currentAttr.attribute.etc?.class,
            ].join(" ")
          : currentAttr.attribute.etc?.class
      }
      style={{
        ...currentAttr.attribute.style,
        ...currentAttr.attribute.etc?.style,
      }}
    />
  );
}

export const Component = memo(Img);
