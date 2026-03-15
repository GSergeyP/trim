import { createContext, useState } from "react";
import type {
  TDefaultState,
  IContextProps,
  IContext,
} from "./context-state.type";

const ContextState = createContext({} as IContext);

function ProviderState(props: IContextProps) {
  const { defaultState, children } = props;
  const [state, setState] = useState<TDefaultState>(defaultState);

  return (
    <ContextState.Provider value={{ state, setState }}>
      {children}
    </ContextState.Provider>
  );
}

export { ProviderState as default, ContextState };
