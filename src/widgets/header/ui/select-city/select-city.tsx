import { memo, useContext, useEffect, useState } from "react";
import { ContextState } from "@/shared/model/context-state";
import { editingData } from "@/shared/lib/editing-data";
import { getCity } from "@/entities/get-city";
import { keyLS, getItemLS } from "@/shared/lib/LS";
import { attr } from "./select-city.attr";
import Button from "@/shared/ui/button";

function SelectCity() {
  const context = useContext(ContextState);
  const ls = getItemLS({ key: keyLS.CITY });
  const city = getCity(editingData(ls));
  const [repeat, setRepeat] = useState(true);

  useEffect(() => {
    if (repeat) {
      if (city.noRequest || city.hasError) {
        context.setState({ ...context.state, CURRENT_CITY: "Укажите город" });
        setRepeat(false);
      } else if (Object.keys(city.data).length > 0) {
        context.setState({ ...context.state, CURRENT_CITY: city.data.city });
        setRepeat(false);
      } else
        context.setState({ ...context.state, CURRENT_CITY: "Укажите город" });
    }
  }, [city, context, repeat]);

  const handleClick = () => {
    context.setState({ ...context.state, MODAL_SELECT_CITY_IS_SHOW: true });
  };

  return (
    <Button
      attr={{ ...attr, title: context.state.CURRENT_CITY as string }}
      onClick={handleClick}
    />
  );
}

export const Component = memo(SelectCity);
