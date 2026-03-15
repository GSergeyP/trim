import { useLayoutEffect } from "react";
import { attr } from "./how-buy.attr";
import Tags from "@/shared/ui/tags";

function HowBuyPage() {
  useLayoutEffect(() => {
    document.title = "trlm.ru - Автозапчасти. Как купить.";
  }, []);

  return <Tags tags="article" attr={attr}>How-buy</Tags>;
}

export const Component = HowBuyPage;
