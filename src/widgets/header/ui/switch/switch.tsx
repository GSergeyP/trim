import { memo, useContext } from "react";
import { ContextState } from "@/shared/model/context-state";
import { offAttr, onAttr } from "./switch.attr";
import Button from "@/shared/ui/button";

function Switch() {
  const context = useContext(ContextState);

  const handleClick = () => {
    context.setState({
      ...context.state,
      IS_SHOW_NAV: !context.state.IS_SHOW_NAV,
    });
  };

  return (
    <>
      {context.state.IS_SHOW_NAV ? (
        <Button attr={onAttr} onClick={handleClick} />
      ) : (
        <Button attr={offAttr} onClick={handleClick} />
      )}
    </>
  );
}

export const Component = memo(Switch);
