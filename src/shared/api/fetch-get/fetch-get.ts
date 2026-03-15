import { useEffect, useReducer } from "react";
import { FetchActionType, reducerFetch } from "@/shared/api/reducer-fetch";
import type { IQueryHTML } from "./fetch-get.type";

const FetchGet = (props: IQueryHTML) => {
  const { URL, sendData } = props;
  const initialState = {
    isLoading: false,
    hasError: false,
    noRequest: false,
    data: {},
  };

  const [state, dispatch] = useReducer(reducerFetch, initialState);

  useEffect(() => {
    if (sendData === null) {
      dispatch({ type: FetchActionType.NO_REQUEST });
      return;
    }

    const fetchAPI = async () => {
      dispatch({ type: FetchActionType.FETCH_INIT });

      try {
        const response = await fetch(sendData ? URL + sendData : URL);
        const data = await response.json();

        dispatch({
          type: FetchActionType.FETCH_SUCCESS,
          payload: data,
        });
      } catch {
        dispatch({ type: FetchActionType.FETCH_ERROR });
      }
    };

    fetchAPI();
  }, [URL, sendData]);

  return state;
};

export { FetchGet };
