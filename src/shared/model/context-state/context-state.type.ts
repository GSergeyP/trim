import { DefaultState } from "./context-state.const";

type TDefaultState = {
  [key in keyof typeof DefaultState]?:
    | boolean
    | string
    | null
    | Record<string, any>;
};

interface IContextProps {
  defaultState: TDefaultState;
  children: React.ReactElement | React.ReactElement[];
}

interface IContext {
  state: TDefaultState;
  setState: (data: TDefaultState) => void;
}

export type { TDefaultState, IContextProps, IContext };
