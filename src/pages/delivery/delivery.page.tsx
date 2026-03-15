import { useLayoutEffect } from "react";
import { attr } from "./delivery.attr";
import Tags from "@/shared/ui/tags";

function DeliveryPage() {
  useLayoutEffect(() => {
    document.title = "trlm.ru - Автозапчасти. Доставка.";
  }, []);
  return <Tags tags="article" attr={attr}>Delivery</Tags>;
}

export const Component = DeliveryPage;
