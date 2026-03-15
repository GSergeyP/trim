import { memo, useMemo } from "react";
import { useDevice } from "@/shared/lib/useDevice";
import { useAttribute } from "@/shared/lib/useAttribute";
import type { IA } from "./a.type";
import Icon from "../icon";

function A(props: IA) {
  const { attr, data, children } = props;
  const device = useDevice();
  const attribute = useAttribute(device, { ...attr, ...data });

  const currentAttr = useMemo(() => {
    return { attribute };
  }, [attribute]);

  return (
    <a
      href={currentAttr.attribute.etc.href}
      className={
        currentAttr.attribute.etc?.variant
          ? [
              "a-" + currentAttr.attribute.etc?.variant,
              currentAttr.attribute.etc?.class,
            ].join(" ")
          : currentAttr.attribute.etc?.class
      }
      style={{
        ...currentAttr.attribute.style,
        ...currentAttr.attribute.etc?.style,
      }}
    >
      {attr.icon && <Icon attr={attr.icon} />}
      {currentAttr.attribute.etc?.title}
      {children}
    </a>
  );
}

export const Component = memo(A);
