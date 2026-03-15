import { memo } from "react";
import { attr } from "./catalog.attr";
import Button from "@/shared/ui/button";

function Catalog() {
  const handleClick = () => {
    alert("catalog");
  };

  return <Button attr={attr} onClick={handleClick} />;
}

export const Component = memo(Catalog);
