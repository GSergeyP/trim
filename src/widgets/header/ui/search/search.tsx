import { memo } from "react";
import { attr } from "./search.attr";
import Button from "@/shared/ui/button";

function Search() {
  const handleClick = () => {
    alert("search");
  };

  return <Button attr={attr} onClick={handleClick} />;
}

export const Component = memo(Search);
