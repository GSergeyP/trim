import { useLayoutEffect } from "react";
import { attr } from "./requisites.attr";
import Tags from "@/shared/ui/tags";

function Requisites() {
  useLayoutEffect(() => {
    document.title = "trlm.ru - Автозапчасти. Реквизиты.";
  }, []);
  return <Tags tags='article' attr={attr}>Requisites</Tags>;
}

export const Component = Requisites;
