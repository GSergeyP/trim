import { useLayoutEffect } from "react";
import { attr } from "./spare-parts.attr";
import Tags from "@/shared/ui/tags";

function SparePartsPage() {
  useLayoutEffect(() => {
    document.title = "trlm.ru - Автозапчасти. Подбор запчастей.";
  }, []);
  return <Tags tags='article' attr={attr}>Spare-parts</Tags>;
}

export const Component = SparePartsPage;
