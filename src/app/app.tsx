import { useEffect } from "react";
import { Outlet } from "react-router";
import { useDevice } from "@/shared/lib/useDevice";
import { keyHTML } from "@/shared/consts/html.const";
import ProviderState, {
  type TDefaultState,
} from "@/shared/model/context-state";
import Header from "@/widgets/header";
import Footer from "@/widgets/footer";

function App() {
  const device = useDevice();

  const defaultState: TDefaultState = {
    ID_CURRENT_CITY: null,
    CURRENT_CITY: null,
    IS_SHOW_NAV: false,
    MODAL_SELECT_CITY_IS_SHOW: false,
  };

  useEffect(() => {
    document.documentElement.setAttribute(keyHTML.DEVICE, device);
  }, [device]);

  return (
    <>
      <ProviderState defaultState={defaultState}>
        <Header />
      </ProviderState>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
