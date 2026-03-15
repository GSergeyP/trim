import { memo, useMemo } from "react";
import { NavLink } from "react-router";
import { useDevice } from "@/shared/lib/useDevice";
import { useAttribute } from "@/shared/lib/useAttribute";
import { ROUTES, ROUTES_TITLE } from "@/shared/model/routes";
import type { ILink } from "./links.type";
import Icon from "@/shared/ui/icon";
import "./links.style.scss";

function Links(props: ILink) {
  const { data, attr, children, onClick } = props;
  const device = useDevice();
  const attribute = useAttribute(device, { ...attr, ...data });

  const currentAttr = useMemo(() => {
    return { attribute };
  }, [attribute]);

  return (
    <NavLink
      to={ROUTES[currentAttr.attribute.etc.to as keyof typeof ROUTES]}
      className={({ isActive }) =>
        isActive
          ? `link-active ${
              currentAttr.attribute.etc?.variant
                ? [
                    `link-${currentAttr.attribute.etc?.variant}`,
                    currentAttr.attribute.etc?.class,
                  ].join(" ")
                : currentAttr.attribute.etc?.class
                  ? currentAttr.attribute.etc?.class
                  : ""
            }`
          : currentAttr.attribute.etc?.variant
            ? [
                "link-" + currentAttr.attribute.etc?.variant,
                currentAttr.attribute.etc?.class,
              ].join(" ")
            : currentAttr.attribute.etc?.class
      }
      style={{
        ...currentAttr.attribute.style,
        ...currentAttr.attribute.etc?.style,
      }}
      onClick={onClick}
    >
      {attr.icon && <Icon attr={attr.icon} />}
      {currentAttr.attribute.etc.title
        ? currentAttr.attribute.etc.title
        : ROUTES_TITLE[
            currentAttr.attribute.etc.to as keyof typeof ROUTES_TITLE
          ]}
      {children}
    </NavLink>
  );
}

export const Component = memo(Links);
