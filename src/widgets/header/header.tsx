import { memo, useContext } from "react";
import { ContextState } from "@/shared/model/context-state";
import { Device, useDevice } from "@/shared/lib/useDevice";

import Logo from "./ui/logo";
import Phone from "./ui/phone";
import SelectCity from "./ui/select-city";
import Catalog from "./ui/catalog";
import Search from "./ui/search";
import Switch from "./ui/switch";
import Auth from "./ui/auth";
import Cart from "./ui/cart";
import ModalSelectCity from "@/features/modal-select-city";

import { attr as headerAttr } from "./header.attr";
import Tags from "@/shared/ui/tags";

import { navBlockAttr, navLinkAttr, navIconAttr } from "./nav.attr";
import { data as navLinkData } from "./nav.data";
import Nav from "@/features/nav";

function Header() {
  const context = useContext(ContextState);
  const device = useDevice();

  return (
    <Tags tags="header" attr={headerAttr}>
      <Logo />
      <Phone />
      <SelectCity />
      <Catalog />
      <Search />
      <Auth />
      <Cart />
      <>
        {device === Device.SM || device === Device.XS ? (
          <>
            <Switch />
            {context.state.IS_SHOW_NAV && (
              <Nav
                navBlockAttr={navBlockAttr}
                navLinkAttr={{ ...navLinkAttr, icon: navIconAttr }}
                navLinkData={navLinkData}
              />
            )}
          </>
        ) : (
          <Nav
            navBlockAttr={navBlockAttr}
            navLinkAttr={navLinkAttr}
            navLinkData={navLinkData}
          />
        )}

        {context.state.MODAL_SELECT_CITY_IS_SHOW && <ModalSelectCity />}
      </>
    </Tags>
  );
}

export const Component = memo(Header);
