import { memo, useContext } from "react";
import { ContextState } from "@/shared/model/context-state";
import type { INav } from "./nav.type";
import Tags from "@/shared/ui/tags";
import Links, { type IDataLink } from "@/shared/ui/links";

function Nav(props: INav) {
  const { navBlockAttr, navLinkAttr, navLinkData } = props;
  const context = useContext(ContextState);

  const handleClick = () => {
    context.setState({ ...context.state, IS_SHOW_NAV: false });
  };

  return (
    <Tags tags="nav" attr={navBlockAttr}>
      {navLinkData.map((item: IDataLink, index: number) => (
        <Links
          key={index}
          attr={navLinkAttr}
          data={item}
          onClick={handleClick}
        />
      ))}
    </Tags>
  );
}

export const Component = memo(Nav);
