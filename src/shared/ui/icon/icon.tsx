import { memo, useMemo } from "react";
import { useAttribute } from "@/shared/lib/useAttribute";
import { useDevice } from "@/shared/lib/useDevice";
import type { IIcon } from "./icon.type";
import * as IconsList from "@/shared/assets/icons-list";

function Icon(props: IIcon) {
  const { attr } = props;
  const device = useDevice();
  const attribute = useAttribute(device, attr);

  const currentAttr = useMemo(() => {
    return { attribute };
  }, [attribute]);

  const Component = IconsList[
    currentAttr.attribute.etc.title as keyof typeof IconsList
  ] as React.FC<Record<string, any>>;

  return (
    <Component
      clases={
        currentAttr.attribute.etc?.variant
          ? [
              "icon-" + currentAttr.attribute.etc?.variant,
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

export const Component = memo(Icon);
