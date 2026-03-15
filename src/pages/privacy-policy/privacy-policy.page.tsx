import { useLayoutEffect } from "react";
import { attr } from "./privacy-policy.attr";
import Tags from "@/shared/ui/tags";

function PrivacyPolicy() {
  useLayoutEffect(() => {
    document.title = "trlm.ru - Автозапчасти. Политика конфиденциальности.";
  }, []);
  return <Tags tags="article" attr={attr}>Privacy-policy</Tags>;
}

export const Component = PrivacyPolicy;
