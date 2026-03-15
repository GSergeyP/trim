import { useLayoutEffect } from "react";
import { attr } from "./pay.attr";
import Tags from "@/shared/ui/tags";

function PayPage() {
  useLayoutEffect(() => {
    document.title = "trlm.ru - Автозапчасти. Оплата.";
  }, []);
  return <Tags tags="article" attr={attr}>Pay</Tags>;
}

export const Component = PayPage;
