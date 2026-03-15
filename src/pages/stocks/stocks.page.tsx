import { useLayoutEffect } from "react";
import { attr } from "./stocks.attr";
import Tags from "@/shared/ui/tags";

function StocksPage() {
  useLayoutEffect(() => {
    document.title = "trlm.ru - Автозапчасти. Акции.";
  }, []);
  return <Tags tags='article' attr={attr}>Stocks</Tags>;
}

export const Component = StocksPage;
