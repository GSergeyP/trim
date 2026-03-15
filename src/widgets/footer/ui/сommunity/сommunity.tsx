import { memo } from "react";

import type { TDataA } from "@/shared/ui/a";
import { blockAttr, aAttr, iconAttr } from "./сommunity.attr";
import { data } from "./сommunity.data";
import Tags from "@/shared/ui/tags";
import A from "@/shared/ui/a";
import Icon from "@/shared/ui/icon";

function Community() {
  return (
    <Tags tags="div" attr={blockAttr}>
      <>
        {data.map((item: TDataA, index: number) => (
          <A key={index} attr={aAttr} data={item}>
            <Icon attr={iconAttr[index]} />
          </A>
        ))}
      </>
    </Tags>
  );
}

export const Component = memo(Community);
