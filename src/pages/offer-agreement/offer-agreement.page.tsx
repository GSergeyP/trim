import { useLayoutEffect } from "react";
import { attr } from "./offer-agreement.attr";
import Tags from "@/shared/ui/tags";

function OfferAgreement() {
  useLayoutEffect(() => {
    document.title = "trlm.ru - Автозапчасти. Договор оферты.";
  }, []);
  return <Tags tags="article" attr={attr}>Offer-agreement</Tags>;
}

export const Component = OfferAgreement;
