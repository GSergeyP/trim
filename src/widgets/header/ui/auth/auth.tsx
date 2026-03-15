import { memo } from "react";
import { attr } from "./auth.attr";
import Button from "@/shared/ui/button";

function Auth() {
  const handleClick = () => {
    alert("auth");
  };

  return <Button attr={attr} onClick={handleClick} />;
}

export const Component = memo(Auth);
