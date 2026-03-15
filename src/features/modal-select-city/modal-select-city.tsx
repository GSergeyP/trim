import { memo, useContext } from "react";
import { ContextState } from "@/shared/model/context-state";
import { getCity } from "@/entities/get-city";
import { setItemLS, keyLS } from "@/shared/lib/LS";
import { blockAttr, buttonAttr } from "./modal-select-city.attr";
import Tags from "@/shared/ui/tags";
import Button from "@/shared/ui/button";

function ModalSelectCity() {
  const context = useContext(ContextState);
  const city = getCity();

  const handleClick = (data: Record<string, string>) => {
    context.setState({
      ...context.state,
      ID_CURRENT_CITY: data.id,
      CURRENT_CITY: data.city,
      MODAL_SELECT_CITY_IS_SHOW: false,
    });

    setItemLS({ key: keyLS.CITY, value: data.id });
  };

  return (
    city.data.length > 0 && (
      <Tags tags="div" attr={blockAttr}>
        {city.data.map((item: Record<string, any>, index: number) => (
          <Button
            key={index}
            attr={{ ...buttonAttr, title: item.city }}
            onClick={() => handleClick({ id: item.id, city: item.city })}
          />
        ))}
      </Tags>
    )
  );
}

export const Component = memo(ModalSelectCity);
