import * as types from "../../actions/types";

export default (state, { type, payload }) => {
  switch (type) {
    case types.GET_BATTERY_STATUS_START:
      return {
        ...state,
        loading: true,
        error: "",
        message: "",
        status: "",
        charge: "",
      };
    case types.GET_BATTERY_STATUS_END:
      return {
        ...state,
        loading: false,
      };
    case types.GET_BATTERY_STATUS_SUCCESS:
      return {
        ...state,
        status: payload.capacity,
        charge: payload.charge,
        message: payload.message,
        error: "",
      };
    case types.GET_BATTERY_STATUS_FAILURE:
      return {
        ...state,
        error: payload.message,
        message: "",
      };
    default:
      return null;
  }
};
