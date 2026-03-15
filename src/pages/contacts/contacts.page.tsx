import { useLayoutEffect } from "react";
import { attr } from "./contacts.attr";
import Tags from "@/shared/ui/tags";

function ContactsPage() {
  useLayoutEffect(() => {
    document.title = "trlm.ru - Автозапчасти. Контакты.";
  }, []);
  return <Tags tags="article" attr={attr}>Contacts</Tags>;
}

export const Component = ContactsPage;
