import { memo } from "react";

import { h3Attr, buttonAttr } from "./running-title.attr";
import Tags from "@/shared/ui/tags";
import Button from "@/shared/ui/button";

function RunningTitle() {
  const handleClick = () => {
    alert("Дизайн — «Есть Идея!»");
  };
  return (
    <Tags tags="h3" attr={h3Attr}>
      <>Дизайн — «</>
      <Button
        attr={{ ...buttonAttr, title: "Есть Идея!" }}
        onClick={handleClick}
      />
      <>»</>
    </Tags>
  );
}

export const Component = memo(RunningTitle);
