import { useLayoutEffect } from "react";
import { attr } from "./home.attr";
import Tags from "@/shared/ui/tags";

import {
  blockAttr as topBlockAttr,
  linkAttr as topLinkAttr,
} from "./banner-top.attr";
import {
  blockAttr as leftBlockAttr,
  linkAttr as leftLinkAttr,
} from "./banner-left.attr";
import {
  blockAttr as rightBlockAttr,
  linkAttr as rightLinkAttr,
} from "./banner-right.attr";
import Banner from "@/features/banner";

function HomePage() {
  useLayoutEffect(() => {
    document.title = "trlm.ru - Автозапчасти.";
  }, []);

  return (
    <Tags tags="article" attr={attr}>
      <Banner
        position="top"
        bannerBlockAttr={topBlockAttr}
        bannerLinkAttr={topLinkAttr}
        bannerLinkData={{ to: "SPARE_PARTS", title: "ПОДРОБНЕЕ" }}
      ></Banner>
      <Banner
        position="left"
        bannerBlockAttr={leftBlockAttr}
        bannerLinkAttr={leftLinkAttr}
        bannerLinkData={{ to: "SPARE_PARTS", title: "ПОДРОБНЕЕ" }}
      />
      <Banner
        position='left'
        bannerBlockAttr={rightBlockAttr}
        bannerLinkAttr={rightLinkAttr}
        bannerLinkData={{ to: "SPARE_PARTS", title: "ПОДРОБНЕЕ" }}
      />
    </Tags>
  );
}

export const Component = HomePage;
