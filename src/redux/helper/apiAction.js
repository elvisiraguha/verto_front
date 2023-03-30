import * as types from "../actions/types";

export default ({
  url = "",
  method = "GET",
  data = null,
  httpOptions = {},
  onStart = types.API_REQUEST_START,
  onEnd = types.API_REQUEST_END,
  onSuccess = types.API_REQUEST_SUCCESS,
  onFailure = types.API_REQUEST_FAILURE,
  label = "",
}) => ({
  type: types.API_REQUEST,
  payload: {
    url,
    method,
    data,
    httpOptions,
    onSuccess,
    onFailure,
    onStart,
    onEnd,
    label,
  },
});
