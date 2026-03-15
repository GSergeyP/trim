import { memo, useMemo } from "react";
import { useDevice } from "@/shared/lib/useDevice";
import { useAttribute } from "@/shared/lib/useAttribute";
import type { ITags } from "./tags.type";

function Tags(props: ITags) {
  const { tags, attr, data, children, onMouseOver, onMouseOut } = props;
  const Tags = tags;
  const device = useDevice();
  const attribute = useAttribute(device, { ...attr, ...data });

  const currentAttr = useMemo(() => {
    return { attribute };
  }, [attribute]);

  return (
    <Tags
      className={
        currentAttr.attribute.etc?.variant
          ? [
              tags + "-" + currentAttr.attribute.etc?.variant,
              currentAttr.attribute.etc?.class,
            ].join(" ")
          : currentAttr.attribute.etc?.class
      }
      style={{
        ...currentAttr.attribute.style,
        ...currentAttr.attribute.etc?.style,
      }}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {currentAttr.attribute.etc?.title}
      {currentAttr.attribute.etc?.subTitle && (
        <span>{" " + currentAttr.attribute.etc?.subTitle}</span>
      )}
      {children}
    </Tags>
  );
}

export const Component = memo(Tags);
