import { memo } from "react";
import { attr } from "./cart.attr";
import Button from "@/shared/ui/button";

function Cart() {
  const handleClick = () => {
    alert("сart");
  };

  return <Button attr={attr} onClick={handleClick} />;
}

export const Component = memo(Cart);
