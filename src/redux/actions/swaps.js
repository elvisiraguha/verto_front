import * as types from "./types";
import { apiAction } from "../helper/index";

export const createSwap = (data) => (dispatch) =>
  dispatch(
    apiAction({
      method: "post",
      url: "swap",
      data: {
        ...data,
      },
      onStart: types.CREATE_SWAP_START,
      onEnd: types.CREATE_SWAP_END,
      onSuccess: types.CREATE_SWAP_SUCCESS,
      onFailure: types.CREATE_SWAP_FAILURE,
      httpOptions: {
        headers: { authorization: `Bearer ${localStorage.token}` },
      },
    })
  );

export const fetchSwaps = () => (dispatch) =>
  dispatch(
    apiAction({
      method: "get",
      url: "/swap",
      onStart: types.FETCH_SWAPS_START,
      onEnd: types.FETCH_SWAPS_END,
      onSuccess: types.FETCH_SWAPS_SUCCESS,
      onFailure: types.FETCH_SWAPS_FAILURE,
    })
  );

export const fetchStationSwaps = (id) => (dispatch) =>
  dispatch(
    apiAction({
      method: "get",
      url: `/swap/${id}`,
      onStart: types.FETCH_SWAPS_START,
      onEnd: types.FETCH_SWAPS_END,
      onSuccess: types.FETCH_SWAPS_SUCCESS,
      onFailure: types.FETCH_SWAPS_FAILURE,
    })
  );
