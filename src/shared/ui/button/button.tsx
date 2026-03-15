import { memo, useMemo } from "react";
import { useDevice } from "@/shared/lib/useDevice";
import { useAttribute } from "@/shared/lib/useAttribute";
import type { IButton } from "./button.type";
import Icon from "@/shared/ui/icon";
import "./button.style.scss";

function Button(props: IButton) {
  const { attr, data, onClick, children } = props;
  const device = useDevice();
  const attribute = useAttribute(device, attr);

  const currentAttr = useMemo(() => {
    return { attribute };
  }, [attribute]);

  return (
    <button
      className={
        currentAttr.attribute.etc?.variant
          ? [
              "button-" + currentAttr.attribute.etc?.variant,
              currentAttr.attribute.etc?.class,
            ].join(" ")
          : currentAttr.attribute.etc?.class
      }
      style={{
        ...currentAttr.attribute.style,
        ...currentAttr.attribute.etc?.style,
      }}
      onClick={() => onClick(data)}
    >
      {currentAttr.attribute.etc?.title}
      {attr.icon && <Icon attr={attr.icon} />}
      {children}
    </button>
  );
}

export const Component = memo(Button);
