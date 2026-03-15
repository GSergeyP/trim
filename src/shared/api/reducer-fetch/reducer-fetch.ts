import { FetchActionType } from "./reducer-fetch.const";

const reducerFetch = (
  state: Record<string, any>,
  action: Record<string, any>,
) => {
  switch (action.type) {
    case FetchActionType.FETCH_INIT:
      return {
        ...state,
        hasError: false,
        isLoading: true,
      };
    case FetchActionType.FETCH_SUCCESS:
      return {
        ...state,
        hasError: false,
        isLoading: false,
        data: action.payload,
      };
    case FetchActionType.FETCH_ERROR:
      return {
        ...state,
        hasError: true,
        isLoading: false,
      };
    case FetchActionType.NO_REQUEST:
      return {
        ...state,
        hasError: false,
        isLoading: false,
        noRequest: true,
      };
    default:
      return state;
  }
};

export { FetchActionType, reducerFetch };
