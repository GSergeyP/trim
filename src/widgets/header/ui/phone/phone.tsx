import { memo } from "react";
import { attr } from "./phone.attr";
import Tags from "@/shared/ui/tags";

function Phone() {
  return (
    <Tags tags="div" attr={attr}>
      8-800-550-19-80
    </Tags>
  );
}

export const Component = memo(Phone);
