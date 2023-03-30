import * as types from "../../actions/types";

export default (state, { type, payload }) => {
  switch (type) {
    case types.FETCH_SWAPS_START:
      return {
        ...state,
        loading: true,
        error: "",
        message: "",
      };
    case types.FETCH_SWAPS_END:
      return {
        ...state,
        loading: false,
      };
    case types.FETCH_SWAPS_SUCCESS:
      return {
        ...state,
        swapsList: payload.swaps,
        message: payload.message,
        error: "",
      };
    case types.FETCH_SWAPS_FAILURE:
      return {
        ...state,
        error: payload.message,
        message: "",
      };
    default:
      return null;
  }
};
