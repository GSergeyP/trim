import { memo } from "react";

import Community from "./ui/сommunity";
import RunningTitle from "./ui/running-title";

import { attr as footerAttr } from "./footer.attr";
import Tags from "@/shared/ui/tags";

import { navBlockAttr, navLinkAttr } from "./nav.attr";
import { data as navLinkData } from "./nav.data";
import Nav from "@/features/nav";

function Footer() {
  return (
    <Tags tags="footer" attr={footerAttr}>
      <Nav
        navBlockAttr={navBlockAttr}
        navLinkAttr={navLinkAttr}
        navLinkData={navLinkData}
      />
      <Community />
      <RunningTitle />
    </Tags>
  );
}

export const Component = memo(Footer);
