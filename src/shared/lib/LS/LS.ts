import type { TGetItemLS, TRemoveItemLS, TSetItemLS } from "./LS.type";

const setItemLS = (props: TSetItemLS) => {
  localStorage.setItem(props.key, JSON.stringify(props.value));
};

const getItemLS = (props: TGetItemLS) => {
  const data = localStorage.getItem(props.key);
  return data ? JSON.parse(data) : null;
};

const removeItemLS = (props: TRemoveItemLS) => {
  localStorage.removeItem(props.key);
};

export { setItemLS, getItemLS, removeItemLS };
