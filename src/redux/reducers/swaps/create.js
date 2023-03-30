import * as types from "../../actions/types";

export default (state, { type, payload }) => {
  switch (type) {
    case types.CREATE_SWAP_START:
      return {
        ...state,
        loading: true,
        error: "",
        message: "",
      };
    case types.CREATE_SWAP_END:
      return {
        ...state,
        loading: false,
      };
    case types.CREATE_SWAP_SUCCESS:
      return {
        ...state,
        message: payload.message,
        error: "",
      };
    case types.CREATE_SWAP_FAILURE:
      return {
        ...state,
        error: payload.message,
        message: "",
      };
    default:
      return null;
  }
};
