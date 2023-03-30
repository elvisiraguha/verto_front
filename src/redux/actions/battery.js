import * as types from "./types";
import { apiAction } from "../helper/index";

export const getBatteryStatus = () => (dispatch) =>
  dispatch(
    apiAction({
      method: "get",
      url: "battery/status",

      onStart: types.GET_BATTERY_STATUS_START,
      onEnd: types.GET_BATTERY_STATUS_END,
      onSuccess: types.GET_BATTERY_STATUS_SUCCESS,
      onFailure: types.GET_BATTERY_STATUS_FAILURE,
      httpOptions: {
        headers: { authorization: `Bearer ${localStorage.token}` },
      },
    })
  );
